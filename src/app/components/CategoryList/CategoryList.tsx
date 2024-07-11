'use client';

import React, { useEffect, useState } from 'react';
import {
  getProductsByCategory,
  getProductsBySubCategory,
} from '@/app/admin/api/productsDB';

import style from './categoryList.module.css';

interface CategoryListProps {
  category: string;
  subCategory?: string;
}

const CategoryList: React.FC<CategoryListProps> = ({
  category,
  subCategory,
}) => {
  const [products, setProducts] = useState<any[]>([]);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    const fetchProductsByCategory = async () => {
      try {
        const fetchedProducts = await getProductsByCategory(category);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products by category:', error);
      }
    };

    fetchProductsByCategory();
  }, [category]);

  useEffect(() => {
    const fetchProductsBySubCategory = async () => {
      if (!subCategory) return;

      try {
        const fetchedProducts = await getProductsBySubCategory(subCategory);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products by subcategory:', error);
      }
    };

    fetchProductsBySubCategory();
  }, [subCategory]);

  return (
    <ul className={style.list}>
      {products.map((product) => (
        <li className={style.item} key={product.id}>
          <img
            className={style.img}
            src={product.productImageUrl}
            alt={product.productName}
          />
          <p className={style.text}>{product.productName}</p>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
