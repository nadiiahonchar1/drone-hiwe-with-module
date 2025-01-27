import React, { useEffect } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { useAppDispatch } from '@/app/helpers/useAppDispatch';
import {
  fetchSubCategoryIfNeeded,
  fetchCategoryIfNeeded,
} from '@/lib/features/products/goods';
import CustomLink from '../Link';
import style from './categoryList.module.css';

interface Product {
  id: string;
  productName: string;
  productImageUrl: string;
  category: string;
  subCategory?: string;
}

interface CategoryListProps {
  category: string | null;
  subCategory?: string | null;
}

const CategoryList: React.FC<CategoryListProps> = ({
  category,
  subCategory,
}) => {
  const dispatch = useAppDispatch();
  const {
    items: allProducts,
    status,
    error,
  } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (category) {
      dispatch(fetchCategoryIfNeeded(category));
    }
  }, [dispatch, category]);

  useEffect(() => {
    if (subCategory) {
      dispatch(fetchSubCategoryIfNeeded(subCategory));
    }
  }, [dispatch, subCategory]);

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = category ? product.category === category : true;
    const matchesSubCategory = subCategory
      ? product.subCategory === subCategory
      : true;
    return matchesCategory && matchesSubCategory;
  });

  const uniqueProducts = Array.from(
    new Map(filteredProducts.map((product) => [product.id, product])).values()
  );

  const formatProductNameForURL = (productName: string) => {
    return productName.replace(/\s+/g, '-').replace(/[^\wа-яіїєґ-]+/gi, '');
  };

  if (status === 'loading') {
    return <p>Завантаження...</p>;
  }

  if (status === 'failed' && error) {
    return <p>Помилка: {error}</p>;
  }

  if (filteredProducts.length === 0) {
    return <p>На жаль тут поки пусто :(</p>;
  }

  return (
    <>
      {uniqueProducts.length === 0 ? (
        <p>На жаль тут поки пусто :(</p>
      ) : (
        <ul className={style.list}>
          {uniqueProducts.map((product) => (
            <li className={style.item} key={product.id}>
              <CustomLink
                className={style.link}
                href={`/shop/${formatProductNameForURL(product.productName)}__${
                  product.id
                }`}
              >
                {product.productImageUrl ? (
                  <Image
                    className={style.img}
                    src={product.productImageUrl}
                    alt={product.productName}
                    width={200}
                    height={200}
                  />
                ) : (
                  <p>No image available</p>
                )}
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
