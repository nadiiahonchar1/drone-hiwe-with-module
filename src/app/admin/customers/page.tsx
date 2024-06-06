'use client';
import React, { useEffect, useState } from 'react';
import { getCustomer } from '../api/customer';
import style from './customers.module.css';

interface Customer {
  id?: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function Forms() {
  const [customer, setCustomer] = useState<Customer[]>([]);
  useEffect(() => {
    getCustomer()
      .then((data) => {
        setCustomer(data);
      })
      .catch((error) => {
        console.error('Помилка при отриманні користувачів:', error);
      });
  }, []);
  return (
    <>
      {!customer && (
        <p className={style.text}>
          Тут ви зможете побачити інформацію по всіх користувачах, що заповнили
          форму на сайті. Щойно вони це зроблять :)
        </p>
      )}
      {customer && (
        <ul>
          <li className={style.custometContainerHeader}>
            <p className={style.item}>Ім&apos;я</p>
            <p className={style.item}>Телефон</p>
            <p className={style.item}>Електронна пошта</p>
            <p className={style.item}>Повідомлення</p>
          </li>
          {customer.map((i) => (
            <li key={i.id} className={style.custometContainer}>
              <p className={style.item}>{i.name}</p>
              <p className={style.item}>{i.phone}</p>
              <p className={style.item}>{i.email}</p>
              <p className={style.item}>{i.message}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
