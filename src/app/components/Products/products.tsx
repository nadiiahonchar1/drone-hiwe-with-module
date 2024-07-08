'use client';

import { useState } from 'react';
import CategoryList from '../CategoryList/CategoryList';
import SelectProduct from '../selectProduct/selectProduct';
import style from './product.module.css';

const Product = () => {
  const [category, setCategory] = useState<string>('');
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('');

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSelectedSubCategory('');

    switch (selectedCategory) {
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

  const handleSubCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubCategory(e.target.value);
    console.log('SelectedSubCategory', e.target.value);
  };

  return (
    <>
      <section className={style.container}>
        <h2 className={style.selectTitle}>Виберіть категорію товару</h2>
        <SelectProduct
          handleCategoryChange={handleCategoryChange}
          handleSubCategoryChange={handleSubCategoryChange}
          subCategories={subCategories}
        />
      </section>
      <section>
        <CategoryList category={category} subCategory={selectedSubCategory} />
      </section>
    </>
  );
};

export default Product;
