'use client';

import React, { useState } from 'react';
import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form';
import style from './productForm.module.css';

interface FormData {
  productName: string;
  productDescription: string;
  category: string;
  subCategory: string;
  productType: string;
  price: number | null;
  availability: string;
  productImage: FileList | null;
  galleryImages: { image: FileList | null }[];
  variations: Variation[];
}

interface Variation {
  variationName: string;
  variationAvailability: string;
}

const ProductForm: React.FC = () => {
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const [productImagePreview, setProductImagePreview] = useState<string | null>(
    null
  );
  const [galleryImagePreviews, setGalleryImagePreviews] = useState<string[]>(
    []
  );

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
      productImage: null,
      galleryImages: [{ image: null }],
      variations: [],
    },
  });

  const { fields: galleryFields, append: appendGalleryImage } = useFieldArray({
    control,
    name: 'galleryImages',
  });

  const { fields: variationFields, append: appendVariation } = useFieldArray({
    control,
    name: 'variations',
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    switch (category) {
      case 'drone':
        setSubCategories(['10 Дюймів', '7 Дюймів']);
        break;
      case 'antenna-relay-stations':
        setSubCategories(['Антени', 'Ретранслятори']);
        break;
      default:
        setSubCategories([]);
    }
  };

  const handleProductImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProductImagePreview(URL.createObjectURL(file));
    }
  };

  const handleGalleryImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const newPreviews = [...galleryImagePreviews];
      newPreviews[index] = URL.createObjectURL(file);
      setGalleryImagePreviews(newPreviews);
    }
  };

  const watchProductType = watch('productType', 'simple');

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.inputContainer}>
        <label className={style.label}>Назва товару</label>
        <input
          className={style.input}
          {...register('productName', {
            required: 'Введіть товар',
          })}
        />
        {errors.productName && (
          <p className={style.error}>{errors.productName.message}</p>
        )}
      </div>

      <div className={style.inputContainer}>
        <label className={style.label}>Зображення товару</label>
        <input
          className={style.input}
          type="file"
          {...register('productImage', {
            required: 'Завантажте зображення товару',
          })}
          onChange={handleProductImageChange}
        />
        {errors.productImage && (
          <p className={style.error}>{errors.productImage.message}</p>
        )}
        {productImagePreview && (
          <img
            src={productImagePreview}
            alt="Product Preview"
            className={style.img}
          />
        )}
      </div>

      <div className={style.inputContainer}>
        <label className={style.label}>Галерея товару</label>
        {galleryFields.map((field, index) => (
          <div key={field.id} className={style.galeryInputContainer}>
            <input
              className={style.input}
              type="file"
              {...register(`galleryImages.${index}.image`, {
                required: false,
              })}
              onChange={(e) => handleGalleryImageChange(e, index)}
            />
            {galleryImagePreviews[index] && (
              <img
                src={galleryImagePreviews[index]}
                alt={`Gallery Preview ${index}`}
                className={style.img}
              />
            )}
            <button
              className={style.button}
              type="button"
              onClick={() => appendGalleryImage({ image: null })}
            >
              Додати ще зображення
            </button>
          </div>
        ))}
      </div>

      <div className={style.inputContainer}>
        <label className={style.label}>Опис товару</label>
        <textarea
          className={style.input}
          {...register('productDescription', {
            required: 'Введіть опис',
          })}
        />
        {errors.productDescription && (
          <p className={style.error}>{errors.productDescription.message}</p>
        )}
      </div>
      <div className={style.inputContainer}>
        <label className={style.label}>Категорія</label>
        <select
          {...register('category', { required: 'Виберіть категорію' })}
          onChange={handleCategoryChange}
        >
          <option value="">Виберіть категорію</option>
          <option value="drone">БПЛА</option>
          <option value="drone-modules">Модулі для БПЛА</option>
          <option value="sapper-devices">Пристрій саперний</option>
          <option value="antenna-relay-stations">
            Ретранслятори та станції
          </option>
        </select>
        {errors.category && (
          <p className={style.error}>{errors.category.message}</p>
        )}
      </div>
      {subCategories.length > 0 && (
        <div>
          <label className={style.label}>Підкатегорія</label>
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
      <div className={style.inputContainer}>
        <label className={style.label}>Тип товару</label>
        <select {...register('productType')}>
          <option value="simple">Звичайний товар</option>
          <option value="variable">Варіативний товар</option>
        </select>
        {errors.productType && (
          <p className={style.error}>{errors.productType.message}</p>
        )}
      </div>
      {watchProductType === 'simple' ? (
        <div>
          <div className={style.inputContainer}>
            <label className={style.label}>Ціна</label>
            <input
              className={style.input}
              type="number"
              {...register('price')}
            />
            {errors.price && (
              <p className={style.error}>{errors.price.message}</p>
            )}
          </div>

          <div className={style.inputContainer}></div>
          <label className={style.label}>Наявність</label>
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
              className={style.button}
              type="button"
              onClick={() =>
                appendVariation({
                  variationName: '',
                  variationAvailability: 'available',
                })
              }
            >
              Додати варіацію
            </button>
          </div>
          {variationFields.map((field, index) => (
            <div key={field.id}>
              <label className={style.label}>Назва варіації</label>
              <input
                className={style.input}
                {...register(`variations.${index}.variationName` as const, {
                  required: 'Виберіть варіацію',
                })}
              />
              {errors.variations?.[index]?.variationName && (
                <p className={style.error}>
                  {(errors.variations as any)?.[index]?.variationName?.message}
                </p>
              )}
              <label className={style.label}>Наявність</label>
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
                <p className={style.error}>
                  {
                    (errors.variations as any)?.[index]?.variationAvailability
                      ?.message
                  }
                </p>
              )}
            </div>
          ))}
        </>
      )}
      <button className={style.button} type="submit">
        Завантажити товар
      </button>
    </form>
  );
};

export default ProductForm;
