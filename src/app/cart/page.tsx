'use client';

import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
// import EmptyCart from '@/assets/emptyCart.svg';
import style from './cart.module.css';

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  console.log('cartItems', cartItems);

  return (
    <div>
      <h2>Ваш кошик</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id}>
            <p>Назва продукту: {item.article}</p>
            <p>Кількість: {item.quantity}</p>
            <p>Загальна сума: {item.total} ₴</p>
          </div>
        ))
      ) : (
        <>
          {/* <Image
            className={style.emo}
            src={EmptyCart}
            alt="Сумний смайлик"
            width={100}
            height={100}
          /> */}
          <h3 className={style.emptyCart}>Ваш кошик зараз порожній!</h3>
        </>
      )}
    </div>
  );
}
