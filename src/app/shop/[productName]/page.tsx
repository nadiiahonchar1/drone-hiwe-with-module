'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';

import { addToCart } from '@/lib/features/cart/cartSlice';
import { categories } from '@/app/data/categories';
import { useAppSelector, useAppDispatch, useAppStore } from '@/lib/store';

import style from '../shop.module.css';

export default function ProductItem(props: {
  params: Promise<{ productName: string }>;
}) {
  const store = useAppStore();
  const dispatch = useAppDispatch();

  const params = React.use(props.params);
  const ID = params.productName.split('__')[1];

  const product = useAppSelector((state) =>
    state.products.items.find((item: any) => item.id === ID)
  );

  const [quantity, setQuantity] = useState<number>(1);
  const [selectedValues, setSelectedValues] = useState<{
    [key: string]: string;
  }>({});
  const [price, setPrice] = useState<string>('');
  const [sku, setSku] = useState<string>('');
  const [availability, setAvailability] = useState<string>('');

  if (!product) {
    return <p>Товар не знайдено</p>;
  }

  const getCategoryLabel = (value: string) => {
    const category = categories.find((cat) => cat.value === value);
    return category ? category.label : 'Невідома категорія';
  };

  const getPriceRange = (variations: { price: number }[]): string => {
    const prices = variations.map((v) => v.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    return minPrice === maxPrice
      ? `${minPrice},00 ₴`
      : `${minPrice},00 ₴ - ${maxPrice},00 ₴`;
  };

  const uniqueFields = () => {
    if (product.productType === 'simple') return {};

    return product.variations.reduce(
      (acc: { [key: string]: Set<string> }, variation: any) => {
        Object.keys(variation).forEach((key) => {
          if (!['price', 'availability', 'sku'].includes(key)) {
            if (!acc[key]) acc[key] = new Set();
            acc[key].add(variation[key]);
          }
        });
        return acc;
      },
      {}
    );
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
      setPrice(`${matchedVariation.price},00 ₴`);
      setSku(matchedVariation.sku);
      setAvailability(matchedVariation.availability);
    } else {
      setPrice('Нема в продажу такої конфігурації');
    }
  };

  const fields = uniqueFields();

  const handleQuantityChange = (value: number) => {
    setQuantity((prev) => Math.max(1, prev + value));
  };

  const handleAddToCart = () => {
    const cleanPrice = parseFloat(
      price.replace(/[^\d,.-]/g, '').replace(',', '.')
    );

    if (
      product.productType === 'variable' &&
      (!cleanPrice || isNaN(cleanPrice))
    ) {
      return toast.warn('Оберіть потрібну конфігурацію');
    }

    if (!product.id) {
      throw new Error('ID продукту не знайдено');
    }

    const cartItem = {
      id: product.id,
      productName: product.productName,
      article: product.productType === 'variable' ? sku : product.sku,
      quantity,
      price: product.price ?? 0,
      total:
        product.productType === 'variable'
          ? cleanPrice * quantity
          : (product.price ?? 0) * quantity,
      productImageUrl: product.productImageUrl,
      variation:
        product.productType === 'variable' ? selectedValues : undefined,
    };

    dispatch(addToCart(cartItem));
    toast.info('Товар додано до кошика');
  };

  return (
    <section>
      <div className={style.productWrapper}>
        <div className={style.imgWrapper}>
          <Image
            className={style.img}
            src={
              product.productImageUrl || '@/assets/srcassetsdrone_6316693.png'
            }
            alt={product.productName}
            width={200}
            height={200}
          />
          {product.galleryImageUrls && (
            <div className={style.galery}>
              {product.galleryImageUrls.map(
                (galleryImg: { image: string | null }) =>
                  galleryImg.image ? (
                    <Image
                      key={galleryImg.image}
                      className={style.galeryImg}
                      src={galleryImg.image}
                      alt={product.productName}
                      width={100}
                      height={100}
                    />
                  ) : null
              )}
            </div>
          )}
        </div>
        <div className={style.descriptionWrapper}>
          <h1 className={style.title}>{product.productName}</h1>
          <div className={style.priceWrapper}>
            {product.productType === 'simple' ? (
              <>
                <p className={style.price}>{product.price},00 &#8372;</p>
                <p className={style.availability}>{product.availability}</p>
              </>
            ) : (
              <p className={style.price}>
                {getPriceRange(product.variations as { price: number }[])}
              </p>
            )}
          </div>
          <div
            className={style.shortDescription}
            dangerouslySetInnerHTML={{ __html: product.shortDescription }}
          />
          <div className={style.flexContainer}>
            <div className={style.quantityWrapper}>
              <button
                className={style.quantityButton}
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <span className={style.quantity}>{quantity}</span>
              <button
                className={style.quantityButton}
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
            <button className={style.button} onClick={handleAddToCart}>
              Додати до кошика
            </button>
          </div>
          {product.productType === 'variable' && (
            <>
              {Object.keys(fields).map((key) => (
                <div key={key} className={style.selectWrapper}>
                  <label className={style.sku} htmlFor={key}>
                    {key}
                  </label>
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
              {price && (
                <>
                  <p className={style.sku}>
                    Вартість варіації: <span>{price}</span>
                  </p>
                  <p className={style.availability}>{availability}</p>
                  <p className={style.sku}>
                    Артикул: <span>{sku}</span>
                  </p>
                </>
              )}
            </>
          )}
          <p className={style.sku}>
            Категорія: <span>{getCategoryLabel(product.category)}</span>
          </p>
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
    </section>
  );
}
