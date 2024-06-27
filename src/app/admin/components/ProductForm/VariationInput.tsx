'use client';

import React, { useState } from 'react';
import { UseFormRegister, FieldErrors, FieldError } from 'react-hook-form';
import SimpleProduct from './SimpleProduct';

// interface FormData {
//   productName: string;
//   productDescription: string;
//   category: string;
//   subCategory: string;
//   productType: string;
//   price: number | null;
//   availability: string;
//   sku: string;
//   productImage: FileList | null;
//   galleryImages: { image: FileList | null }[];
//   variations: { [key: string]: any }[];
// }

interface VariationInputProps {
  index: number;
  namesList: string[];
  register: any;
  errors: any;
}

const VariationInput: React.FC<VariationInputProps> = ({
  index,
  namesList,
  register,
  errors,
}) => {
  const getErrorMessage = (error: FieldError | undefined) => {
    return error ? error.message || 'Error' : null;
  };

  return (
    <div>
      {namesList.map((name) => (
        <div key={name}>
          <label>{name}</label>
          <input
            type="text"
            {...register(`variations[${index}].${name}` as const, {
              required: 'Введіть значення',
            })}
          />
          {errors.variations?.[index]?.[name] && (
            <p>
              {getErrorMessage(errors.variations[index][name] as FieldError)}
            </p>
          )}
        </div>
      ))}
      <SimpleProduct
        register={(fieldName: any) =>
          register(`variations[${index}].${fieldName}` as const)
        }
        errors={errors}
        getErrorMessage={getErrorMessage}
      />
    </div>
  );
};

export default VariationInput;
