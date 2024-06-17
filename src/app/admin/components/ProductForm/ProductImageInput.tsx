'use client';
// import React from 'react';
// import { UseFormRegister, FieldErrors } from 'react-hook-form';
// import style from './productForm.module.css';

// interface ProductImageInputProps {
//   register: UseFormRegister<any>;
//   errors: FieldErrors;
//   handleProductImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   productImagePreview: string | null;
// }

// const ProductImageInput: React.FC<ProductImageInputProps> = ({
//   register,
//   errors,
//   handleProductImageChange,
//   productImagePreview,
// }) => {
//   const errorMessage = errors.productImage?.message;
//   return (
//     <div className={style.inputContainer}>
//       <label className={style.label}>Зображення товару</label>
//       <input
//         className={style.input}
//         type="file"
//         {...register('productImage', {
//           required: 'Завантажте зображення товару',
//         })}
//         onChange={handleProductImageChange}
//       />
//       {errorMessage && typeof errorMessage === 'string' && (
//         <p className={style.error}>{errorMessage}</p>
//       )}
//       {productImagePreview && (
//         <img
//           src={productImagePreview}
//           alt="Product Preview"
//           className={style.img}
//         />
//       )}
//     </div>
//   );
// };

// export default ProductImageInput;
// ProductImageInput.tsx
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
