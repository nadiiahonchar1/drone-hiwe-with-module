'use client';
import React, { useEffect, useState } from 'react';
import Wrapper from '@/app/components/Wrapper/Wrapper';
import { getProductByID } from '@/app/admin/api/productsDB';
import style from '../shop.module.css';

export default function ProductItem(props: {
  params: { productName: string };
  searchParams: {};
}) {
  const { params } = props;
  const ID = params.productName.split('__')[1];

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProductsByID = async () => {
      try {
        const fetchedProducts = await getProductByID(ID);
        setProduct(fetchedProducts);
        console.log(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products by ID:', error);
      }
    };

    fetchProductsByID();
  }, [ID]);

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
              </div>
              <div className={style.descriptionWrapper}>
                <h1 className={style.title}>{product.productName} </h1>
                <div className={style.priceWrapper}>
                  <p className={style.price}>{product.price},00 &#8372;</p>
                  <p className={style.availability}>{product.availability}</p>
                </div>
                <div
                  className={style.shortDescription}
                  dangerouslySetInnerHTML={{ __html: product.shortDescription }}
                />
                {/* <div>
                <p>Опис</p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: product.productDescription,
                  }}
                />
              </div> */}
              </div>
            </div>
            <div>
              <p>Опис</p>
              <div
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
