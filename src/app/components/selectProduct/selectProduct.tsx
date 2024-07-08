'use client';
import React from 'react';
import style from './selectProduct.module.css';
import { categories } from '@/app/data/categories';

interface SelectProductProps {
  handleCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSubCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  subCategories: string[];
}

const SelectProduct: React.FC<SelectProductProps> = ({
  handleCategoryChange,
  handleSubCategoryChange,
  subCategories,
}) => {
  return (
    <div className={style.inputContainer}>
      <div className={style.inputField}>
        <label className={style.selectLabel}>Категорія</label>
        <select className={style.inputSelect} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>

      {subCategories.length > 0 && (
        <div className={style.inputField}>
          <label className={style.selectLabel}>Підкатегорія</label>
          <select
            className={style.inputSelect}
            onChange={handleSubCategoryChange}
          >
            <option value="">Виберіть підкатегорію</option>
            {subCategories.map((subCategory) => (
              <option key={subCategory} value={subCategory}>
                {subCategory}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default SelectProduct;
