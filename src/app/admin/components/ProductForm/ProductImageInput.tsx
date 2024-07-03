'use client';

import React from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import style from './productForm.module.css';

interface ProductImageInputProps {
  register: UseFormRegisterReturn<string>;
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

// {
//     "productName": "Павук (Датчик На Розрив Кола )",
//     "shortDescription": "«Павук» — переносний пристрій, призначений для ініціювання електродетонаторів під час підривних робіт.",
//     "productDescription": "Пристрій призначений для експлуатації в помірно температурному кліматі при температурах від -35 ℃ до +45 ℃ і відносній вологості повітря до 98%\nЖивлення – 1 елемент типу КРОНА\n\nПринцип роботи\nПри розімкнені кола – напруга передається на електродетонатор та відбувається ініціація.",
//     "category": "sapper-devices",
//     "subCategory": "",
//     "productType": "simple",
//     "price": "250",
//     "availability": "Доступно за замовленням",
//     "sku": "DH-FDK-7-1-1-1-2-1",
//     "productImage": {},
//     "galleryImages": [
//         {
//             "image": null
//         }
//     ],
//     "variations": []
// }
