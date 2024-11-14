'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

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
        <p>Кошик порожній</p>
      )}
    </div>
  );
}
