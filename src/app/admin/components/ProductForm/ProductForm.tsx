'use client';

import React, { useState } from 'react';
import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form';

interface FormData {
  productName: string;
  productDescription: string;
  category: string;
  subCategory: string;
  productType: string;
  price: number | null;
  availability: string;
  variations: Variation[];
}

interface Variation {
  variationName: string;
  variationAvailability: string;
}

const ProductForm: React.FC = () => {
  const [subCategories, setSubCategories] = useState<string[]>([]);

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      productName: '',
      productDescription: '',
      category: '',
      subCategory: '',
      productType: 'simple',
      price: null,
      availability: 'available',
      variations: [],
    },
  });

  const { fields, append } = useFieldArray<Variation>({
    control,
    name: 'variations',
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    switch (category) {
      case 'БПЛА':
        setSubCategories(['10 Дюймів', '7 Дюймів']);
        break;
      case "Ретранслятори та станції зв'язку":
        setSubCategories(['Антени', 'Ретранслятори']);
        break;
      default:
        setSubCategories([]);
    }
  };

  const watchProductType = watch('productType', 'simple');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Назва товару</label>
        <input
          {...register('productName', {
            required: 'Введіть товар',
          })}
        />
        {errors.productName && <p>{errors.productName.message}</p>}
      </div>
      <div>
        <label>Опис товару</label>
        <textarea
          {...register('productDescription', {
            required: 'Введіть опис',
          })}
        />
        {errors.productDescription && (
          <p>{errors.productDescription.message}</p>
        )}
      </div>
      <div>
        <label>Категорія</label>
        <select
          {...register('category', { required: 'Виберіть категорію' })}
          onChange={handleCategoryChange}
        >
          <option value="">Виберіть категорію</option>
          <option value="БПЛА">БПЛА</option>
          <option value="Модулі для БПЛА">Модулі для БПЛА</option>
          <option value="Пристрій саперний">Пристрій саперний</option>
          <option value="Ретранслятори та станції зв'язку">
            Ретранслятори та станції зв'язку
          </option>
        </select>
        {errors.category && <p>{errors.category.message}</p>}
      </div>
      {subCategories.length > 0 && (
        <div>
          <label>Підкатегорія</label>
          <select {...register('subCategory')}>
            <option value="">Виберіть підкатегорію</option>
            {subCategories.map((subCategory) => (
              <option key={subCategory} value={subCategory}>
                {subCategory}
              </option>
            ))}
          </select>
        </div>
      )}
      <div>
        <label>Тип товару</label>
        <select {...register('productType')}>
          <option value="simple">Звичайний товар</option>
          <option value="variable">Варіативний товар</option>
        </select>
        {errors.productType && <p>{errors.productType.message}</p>}
      </div>
      {watchProductType === 'simple' ? (
        <div>
          <label>Ціна</label>
          <input type="number" {...register('price')} />
          {errors.price && <p>{errors.price.message}</p>}
          <label>Наявність</label>
          <select {...register('availability')}>
            <option value="available">Є в наявності</option>
            <option value="preorder">Доступно за замовленням</option>
            <option value="outofstock">Нема в наявності</option>
          </select>
        </div>
      ) : (
        <>
          <div>
            <button
              type="button"
              onClick={() =>
                append({
                  variationName: '',
                  variationAvailability: 'available',
                })
              }
            >
              Додати варіацію
            </button>
          </div>
          {fields.map((field, index) => (
            <div key={field.id}>
              <label>Назва варіації</label>
              <input
                {...register(`variations.${index}.variationName` as const, {
                  required: 'Виберіть варіацію',
                })}
              />
              {errors.variations?.[index]?.variationName && (
                <p>{errors.variations[index]?.variationName?.message}</p>
              )}
              <label>Наявність</label>
              <select
                {...register(`variations.${index}.variationAvailability`, {
                  required: 'Виберіть наявність',
                })}
              >
                <option value="available">Є в наявності</option>
                <option value="preorder">Доступно за замовленням</option>
                <option value="outofstock">Нема в наявності</option>
              </select>
              {errors.variations?.[index]?.variationAvailability && (
                <p>
                  {errors.variations[index]?.variationAvailability?.message}
                </p>
              )}
            </div>
          ))}
        </>
      )}
      <button type="submit">Завантажити товар</button>
    </form>
  );
};

export default ProductForm;
