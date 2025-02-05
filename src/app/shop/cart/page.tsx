// 'use client';

// import React from 'react';
// import { RootState } from '@/lib/store';
// import { useAppSelector } from '@/lib/store';
// import style from './cart.module.css';

// export default function Cart() {
//   const cartItems = useAppSelector((state: RootState) => state.cart.items);
//   console.log('cartItems', cartItems);

//   return (
//     <div>
//       {cartItems.length > 0 ? (
//         cartItems.map((item) => (
//           <div key={item.id}>
//             <p>Назва продукту: {item.article}</p>
//             <p>Кількість: {item.quantity}</p>
//             <p>Загальна сума: {item.total} ₴</p>
//           </div>
//         ))
//       ) : (
//         <div className={style.emptyCartWrapper}>
//           <h3 className={style.emptyCart}>Ваш кошик зараз порожній!</h3>
//         </div>
//       )}
//     </div>
//   );
// }

'use client';

import React from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/store';
import { RootState } from '@/lib/store';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '@/lib/features/cart/cartSlice';
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

  return (
    <div>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className={style.cartItem}>
            <p>Назва продукту: {item.article}</p>
            <p>Кількість: {item.quantity}</p>
            <p>Загальна сума: {item.total} ₴</p>
            <div className={style.controls}>
              <button
                onClick={() => handleDecrease(item.id)}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrease(item.id)}>+</button>
              <button
                onClick={() => handleRemove(item.id)}
                className={style.removeBtn}
              >
                Видалити
              </button>
            </div>
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
