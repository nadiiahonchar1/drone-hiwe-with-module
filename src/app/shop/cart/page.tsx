'use client';

import React from 'react';
// import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { useAppSelector } from '@/lib/store';
import style from './cart.module.css';

export default function Cart() {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  console.log('cartItems', cartItems);

  return (
    <div>
      {/* <h2>Ваш кошик</h2> */}
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id}>
            <p>Назва продукту: {item.article}</p>
            <p>Кількість: {item.quantity}</p>
            <p>Загальна сума: {item.total} ₴</p>
          </div>
        ))
      ) : (
        <div className={style.emptyCartWrapper}>
          <h3 className={style.emptyCart}>Ваш кошик зараз порожній!</h3>
        </div>
      )}
    </div>
  );
}
