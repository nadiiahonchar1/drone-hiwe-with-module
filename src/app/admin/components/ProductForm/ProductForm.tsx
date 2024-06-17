'use client';

import React, { useState } from 'react';
import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form';
import ProductNameInput from './ProductNameInput';
import ProductImageInput from './ProductImageInput';
import style from './productForm.module.css';

interface FormData {
  productName: string;
  productDescription: string;
  category: string;
  subCategory: string;
  productType: string;
  price: number | null;
  availability: string;
  sku: string;
  productImage: FileList | null;
  galleryImages: { image: FileList | null }[];
  variations: Variation[];
}

interface Variation {
  variationName: string;
  variationAvailability: string;
  variationPrice: number;
  variationSKU: string;
}

const ProductForm: React.FC = () => {
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const [productImagePreview, setProductImagePreview] = useState<string | null>(
    null
  );
  const [galleryImagePreviews, setGalleryImagePreviews] = useState<string[]>(
    []
  );
  const [numOfVariations, setNumOfVariations] = useState(0);
  const [variationNames, setVariationNames] = useState<string[]>([]);

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
      sku: '',
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
      <ProductNameInput register={register} errors={errors} />

      <ProductImageInput
        register={register('productImage', {
          required: 'Завантажте зображення товару',
        })}
        errors={errors.productImage}
        onChange={handleProductImageChange}
        previewUrl={productImagePreview}
        label="Зображення товару"
      />

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
          </div>
        ))}
        <button
          className={style.button}
          type="button"
          onClick={() => appendGalleryImage({ image: null })}
        >
          Додати ще зображення
        </button>
      </div>

      <div className={style.inputContainer}>
        <label className={style.label}>Опис товару</label>
        <textarea
          spellCheck="true"
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

          <div className={style.inputContainer}>
            <label className={style.label}>Артикул</label>
            <input
              className={style.input}
              type="text"
              {...register('sku', {
                required: 'Введіть артикул',
              })}
            />
            {errors.sku && <p className={style.error}>{errors.sku.message}</p>}
          </div>

          <div className={style.inputContainer}>
            <label className={style.label}>Наявність</label>
            <select {...register('availability')}>
              <option value="available">Є в наявності</option>
              <option value="preorder">Доступно за замовленням</option>
              <option value="outofstock">Нема в наявності</option>
            </select>
          </div>
        </div>
      ) : (
        <>
          <div>
            <label className={style.label}>Кількість параметрів варіацій</label>
            <input
              type="number"
              className={style.input}
              value={numOfVariations}
              onChange={(e) => setNumOfVariations(parseInt(e.target.value))}
              min={0}
            />
            <button
              className={style.button}
              type="button"
              onClick={() => {
                const newNames = Array(numOfVariations).fill('');
                setVariationNames(newNames);
              }}
            >
              Підтвердити
            </button>
          </div>

          {variationNames.length > 0 && (
            <>
              {variationNames.map((name, index) => (
                <div key={index} className={style.inputContainer}>
                  <label className={style.label}>
                    Назва варіації {index + 1}
                  </label>
                  <input
                    type="text"
                    className={style.input}
                    value={variationNames[index]}
                    onChange={(e) => {
                      const newNames = [...variationNames];
                      newNames[index] = e.target.value;
                      setVariationNames(newNames);
                    }}
                  />
                </div>
              ))}
              <div>
                <button
                  className={style.button}
                  type="button"
                  onClick={() =>
                    appendVariation({
                      variationName: '',
                      variationAvailability: 'available',
                      variationPrice: 0,
                      variationSKU: '',
                    })
                  }
                >
                  Додати варіацію
                </button>
              </div>
            </>
          )}

          {variationFields.map((field, index) => (
            <div key={field.id} className={style.variationContainer}>
              {variationNames.map((name, varIndex) => (
                <div key={varIndex} className={style.inputContainer}>
                  <label className={style.label}>{name}</label>
                  <input
                    className={style.input}
                    {...register(`variations.${index}.variationName` as const, {
                      required: 'Введіть варіацію',
                    })}
                  />
                  {errors.variations?.[index]?.variationName && (
                    <p className={style.error}>
                      {
                        (errors.variations as any)?.[index]?.variationName
                          ?.message
                      }
                    </p>
                  )}
                </div>
              ))}
              <div className={style.inputContainer}>
                <label className={style.label}>Ціна</label>
                <input
                  type="number"
                  className={style.input}
                  {...register(`variations.${index}.variationPrice`, {
                    required: 'Введіть ціну',
                  })}
                />
                {errors.variations?.[index]?.variationPrice && (
                  <p className={style.error}>
                    {
                      (errors.variations as any)?.[index]?.variationPrice
                        ?.message
                    }
                  </p>
                )}
              </div>
              <div className={style.inputContainer}>
                <label className={style.label}>Артикул</label>
                <input
                  type="text"
                  className={style.input}
                  {...register(`variations.${index}.variationSKU`, {
                    required: 'Введіть артикул',
                  })}
                />
                {errors.variations?.[index]?.variationSKU && (
                  <p className={style.error}>
                    {(errors.variations as any)?.[index]?.variationSKU?.message}
                  </p>
                )}
              </div>
              <div className={style.inputContainer}>
                <label className={style.label}>Наявність</label>
                <select
                  className={style.input}
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
