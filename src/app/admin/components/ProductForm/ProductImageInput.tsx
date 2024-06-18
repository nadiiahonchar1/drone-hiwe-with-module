'use client';

import React from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import style from './productForm.module.css';

interface ProductImageInputProps {
  register: UseFormRegisterReturn<string>; // Зміна типу на загальний для будь-якого імені поля
  errors?: FieldError;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  previewUrl: string | null;
  label: string;
}

const ProductImageInput: React.FC<ProductImageInputProps> = ({
  register,
  errors,
  onChange,
  previewUrl,
  label,
}) => {
  return (
    <div className={style.inputContainer}>
      <label className={style.label}>{label}</label>
      <input
        className={style.input}
        type="file"
        {...register}
        onChange={onChange}
      />
      {errors && <p className={style.error}>{errors.message}</p>}
      {previewUrl && (
        <img src={previewUrl} alt="Preview" className={style.img} />
      )}
    </div>
  );
};

export default ProductImageInput;
