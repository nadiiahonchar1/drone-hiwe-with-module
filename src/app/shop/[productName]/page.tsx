'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Wrapper from '@/app/components/Wrapper/Wrapper';
import { getProductByID } from '@/app/admin/api/productsDB';
import { categories } from '@/app/data/categories';
import style from '../shop.module.css';

export default function ProductItem(props: {
  params: { productName: string };
  searchParams: {};
}) {
  const { params } = props;
  const ID = params.productName.split('__')[1];

  const [product, setProduct] = useState<any>(null);
  const [selectedValues, setSelectedValues] = useState<{
    [key: string]: string;
  }>({});
  const [price, setPrice] = useState<string>('');

  useEffect(() => {
    const fetchProductsByID = async () => {
      try {
        const fetchedProducts = await getProductByID(ID);
        setProduct(fetchedProducts);
        console.log('product', fetchedProducts);
      } catch (error) {
        console.error('Error fetching products by ID:', error);
      }
    };

    fetchProductsByID();
  }, [ID]);

  const getCategoryLabel = (value: string) => {
    const category = categories.find((cat) => cat.value === value);
    return category ? category.label : 'Невідома категорія';
  };

  function getPriceRange(variations: { price: number }[]): string {
    const minPrice = Math.min(...variations.map((v) => v.price));
    const maxPrice = Math.max(...variations.map((v) => v.price));
    if (minPrice === maxPrice) {
      return `${minPrice},00  ₴`;
    }

    return `${minPrice},00  ₴ - ${maxPrice},00  ₴`;
  }

  const uniqueFields = () => {
    if (!product || product.productType === 'simple') return {};

    const fields = product.variations.reduce(
      (acc: { [key: string]: Set<string> }, variation: any) => {
        Object.keys(variation).forEach((key) => {
          if (!['price', 'availability', 'sku'].includes(key)) {
            if (!acc[key]) {
              acc[key] = new Set();
            }
            acc[key].add(variation[key]);
          }
        });
        return acc;
      },
      {}
    );

    return fields;
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newSelectedValues = { ...selectedValues, [name]: value };
    setSelectedValues(newSelectedValues);

    const matchedVariation = product.variations.find((variation: any) =>
      Object.keys(newSelectedValues).every(
        (key) => variation[key] === newSelectedValues[key]
      )
    );

    if (matchedVariation) {
      setPrice(`${matchedVariation.price},00  ₴`);
    } else {
      setPrice('Нема в продажу такої конфігурації');
    }
  };

  const fields = uniqueFields();

  return (
    <Wrapper>
      <section>
        {product && (
          <>
            <div className={style.productWrapper}>
              <div className={style.imgWrapper}>
                <img
                  className={style.img}
                  src={product.productImageUrl}
                  alt={product.productName}
                />
                {/* <Image
                  className={style.img}
                  src={product.productImageUrl}
                  alt={product.productName}
                /> */}
              </div>
              <div className={style.descriptionWrapper}>
                <h1 className={style.title}>{product.productName} </h1>
                <div className={style.priceWrapper}>
                  {product.productType === 'simple' ? (
                    <>
                      <p className={style.price}>{product.price},00 &#8372;</p>
                      <p className={style.availability}>
                        {product.availability}
                      </p>
                    </>
                  ) : (
                    <p className={style.price}>
                      {getPriceRange(product.variations)}
                    </p>
                  )}
                </div>
                <div
                  className={style.shortDescription}
                  dangerouslySetInnerHTML={{ __html: product.shortDescription }}
                />
                <div>
                  {product.productType === 'simple' ? (
                    <p className={style.sku}>Артикул: {product.sku}</p>
                  ) : (
                    <>
                      {Object.keys(fields).map((key) => (
                        <div key={key} className={style.selectWrapper}>
                          <label htmlFor={key}>{key}</label>
                          <select
                            id={key}
                            name={key}
                            onChange={handleSelectChange}
                            className={style.select}
                          >
                            <option value="">Оберіть варіант</option>
                            {[...fields[key]].map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                      ))}
                      <p className={style.price}>{price}</p>
                    </>
                  )}
                  <p className={style.sku}>
                    Категорія:{' '}
                    <span className={style.skuCat}>
                      {getCategoryLabel(product.category)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className={style.descriptionArticle}>
              <p className={style.description}>Опис</p>
              <div
                className={style.productDescription}
                dangerouslySetInnerHTML={{
                  __html: product.productDescription,
                }}
              />
            </div>
          </>
        )}
      </section>
    </Wrapper>
  );
}
