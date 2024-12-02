import React, { useEffect } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import { RootState } from '@/lib/store';
import { useAppDispatch } from '@/app/helpers/useAppDispatch';
import {
  fetchProductsByCategory,
  fetchProductsBySubCategory,
} from '@/lib/features/products/goods';
import CustomLink from '../Link';
import style from './categoryList.module.css';

interface CategoryListProps {
  category: string;
  subCategory?: string;
}

const CategoryList: React.FC<CategoryListProps> = ({
  category,
  subCategory,
}) => {
  const dispatch = useAppDispatch();
  const {
    items: products,
    status,
    error,
  } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (category) {
      dispatch(fetchProductsByCategory(category));
    }
  }, [dispatch, category]);

  useEffect(() => {
    if (subCategory) {
      dispatch(fetchProductsBySubCategory(subCategory));
    }
  }, [dispatch, subCategory]);

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
          {products.map((product: any) => (
            <li className={style.item} key={product.id}>
              <CustomLink
                className={style.link}
                href={`/shop/${formatProductNameForURL(product.productName)}__${
                  product.id
                }`}
              >
                <Image
                  className={style.img}
                  src={product.productImageUrl}
                  alt={product.productName}
                  width={200}
                  height={200}
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
