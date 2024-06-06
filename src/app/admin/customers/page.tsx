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
        console.log('Отримані користувачі:', data);
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
          {customer.map((i) => (
            <li key={i.id} className={style.custometContainer}>
              <p>{i.name}</p>
              <p>{i.phone}</p>
              <p>{i.email}</p>
              <p>{i.message}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
