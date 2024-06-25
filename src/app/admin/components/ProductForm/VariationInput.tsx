'use client';

import React, { useState } from 'react';
import { UseFormRegister, FieldErrors, FieldError } from 'react-hook-form';
import SimpleProduct from './SimpleProduct';

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
  variations: any;
}

interface VariationInputProps {
  namesList: string[];
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  onChange: (updatedVariation: Record<string, any>) => void;
}

const VariationInput: React.FC<VariationInputProps> = ({
  namesList,
  register,
  errors,
  onChange,
}) => {
  const [variation, setVariation] = useState<Record<string, any>>(
    namesList.reduce((acc, name) => ({ ...acc, [name]: '' }), {})
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedVariation = { ...variation, [name]: value };
    setVariation(updatedVariation);
    onChange(updatedVariation);
  };

  const getErrorMessage = (error: FieldError | undefined) => {
    return error ? error.message || 'Error' : null;
  };

  return (
    <div>
      {namesList.map((name) => (
        <div key={name}>
          <label>{name}</label>
          {/* <input
            type="text"
            {...register(`variations.${name}` as const)}
            name={name}
            onChange={handleChange}
          /> */}
          <input
            type="text"
            {...register(`variations.${name}` as const, {
              required: 'Введіть значення',
            })}
          />
          {errors.variations?.[name as keyof typeof errors.variations] && (
            <p>
              {getErrorMessage(
                errors.variations[
                  name as keyof typeof errors.variations
                ] as FieldError
              )}
            </p>
          )}
        </div>
      ))}
      <SimpleProduct
        register={(fieldName: any) =>
          register(`variations.${fieldName}` as const)
        }
        errors={errors}
        getErrorMessage={getErrorMessage}
      />
    </div>
  );
};

export default VariationInput;
