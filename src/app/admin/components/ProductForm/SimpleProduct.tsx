'use client';

import React from 'react';
import style from './productForm.module.css';

interface SimpleProductProps {
  register: any; // Тип для register залежить від бібліотеки, яку ви використовуєте
  errors: any; // Аналогічно для errors
  getErrorMessage: (error: any) => string | null;
}

const SimpleProduct: React.FC<SimpleProductProps> = ({
  register,
  errors,
  getErrorMessage,
}) => {
  return (
    <>
      <div>
        <label>Ціна</label>
        <input type="number" {...register('price')} />
        {errors.price && <p>{getErrorMessage(errors.price)}</p>}
      </div>
      <div className={style.inputContainer}>
        <label className={style.label}>Артикул</label>
        <input
          className={style.input}
          type="text"
          {...register('sku' as const, {
            required: 'Введіть артикул',
          })}
        />
        {errors.sku && (
          <p className={style.error}>{getErrorMessage(errors.sku)}</p>
        )}
      </div>

      <div className={style.inputContainer}>
        <label className={style.label}>Наявність</label>
        <select {...register('availability' as const)}>
          <option value="available">Є в наявності</option>
          <option value="preorder">Доступно за замовленням</option>
          <option value="outofstock">Нема в наявності</option>
        </select>
      </div>
    </>
  );
};

export default SimpleProduct;
