'use client';

import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
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

interface CategorySelectProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  subCategories: string[];
  handleCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  register,
  errors,
  subCategories,
  handleCategoryChange,
}) => {
  const getErrorMessage = (error: any) => {
    if (error) {
      return typeof error === 'string' ? error : error.message;
    }
    return null;
  };

  return (
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
        <option value="antenna-relay-stations">Ретранслятори та станції</option>
      </select>
      {errors.category && (
        <p className={style.error}>{getErrorMessage(errors.category)}</p>
      )}

      {subCategories.length > 0 && (
        <>
          <label className={style.label}>Підкатегорія</label>
          <select {...register('subCategory')}>
            <option value="">Виберіть підкатегорію</option>
            {subCategories.map((subCategory) => (
              <option key={subCategory} value={subCategory}>
                {subCategory}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default CategorySelect;
