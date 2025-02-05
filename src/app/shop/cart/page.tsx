'use client';

import React from 'react';
import Image from 'next/image';
import { useAppSelector, useAppDispatch } from '@/lib/store';
import { RootState } from '@/lib/store';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '@/lib/features/cart/cartSlice';
import Button from '@/app/components/Button/Button';
import style from './cart.module.css';

export default function Cart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  const handleIncrease = (id: string) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id: string) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.total, 0);

  return (
    <div>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className={style.cartItem}>
              <Image
                className={style.img}
                src={item.productImageUrl || '/assets/drone_6316693.png'}
                alt={item.productName}
                width={100}
                height={100}
              />
              <div>
                <p>{item.productName}</p>
                <p>Сума: {item.total} ₴</p>
              </div>
              <div>
                <p>Кількість:</p>
                <div className={style.controls}>
                  <button
                    className={style.controlsQuantity}
                    onClick={() => handleDecrease(item.id)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className={style.quantity}>{item.quantity}</span>
                  <button
                    className={style.controlsQuantity}
                    onClick={() => handleIncrease(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className={style.removeBtn}
              >
                Видалити
              </button>
            </div>
          ))}
          <div className={style.totalAmount}>
            <h3>Загальна сума: {totalAmount} ₴</h3>
            <Button
              buttonText="Натисніть для підтвердження замовлення"
              redirectPath="/shop/checkout"
            />
          </div>
        </>
      ) : (
        <div className={style.emptyCartWrapper}>
          <h3 className={style.emptyCart}>Ваш кошик зараз порожній!</h3>
        </div>
      )}
    </div>
  );
}
