import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import {
  getProductsByCategory,
  getProductsBySubCategory,
} from '@/app/admin/api/productsDB';

import style from './categoryList.module.css';
import CustomLink from '../Link';

interface CategoryListProps {
  category: string;
  subCategory?: string;
}

const CategoryList: React.FC<CategoryListProps> = ({
  category,
  subCategory,
}) => {
  const [products, setProducts] = useState<any[]>([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
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

  const formatProductNameForURL = (productName: string) => {
    return productName
      .replace(/\s+/g, '-')
      .replace(/[^\wа-яА-ЯіІїЇєЄґҐ-]+/g, '');
  };

  return (
    <>
      {products.length === 0 ? (
        <p>На жаль тут поки пусто :(</p>
      ) : (
        <ul className={style.list}>
          {products.map((product) => (
            <li className={style.item} key={product.id}>
              <CustomLink
                href={`/shop/${formatProductNameForURL(product.productName)}__${
                  product.id
                }`}
              >
                {/* <img
                  className={style.img}
                  src={product.productImageUrl}
                  alt={product.productName}
                /> */}
                <Image
                  className={style.img}
                  src={product.productImageUrl}
                  alt={product.productName}
                />
                <p className={style.text}>{product.productName}</p>
              </CustomLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CategoryList;
