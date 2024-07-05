'use client';
import React, { useEffect, useState } from 'react';
// import { getCustomer } from '../api/customer';
import { getCustomer } from '../api/customerDB';
import style from './customers.module.css';
import Wrapper from '@/app/components/Wrapper/Wrapper';

interface User {
  id?: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}

const Forms: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    getCustomer()
      .then((data: User[]) => {
        // Перетворюємо User до Customer
        const customersData = data.map((user) => ({
          id: user.id || '', // Встановлюємо пустий рядок якщо id undefined
          name: user.name,
          phone: user.phone,
          email: user.email,
          message: user.message,
        }));
        setCustomers(customersData);
      })
      .catch((error) => {
        console.error('Помилка при отриманні користувачів:', error);
      });
  }, []);

  return (
    <Wrapper>
      <section className={style.container}>
        {customers.length === 0 ? (
          <p className={style.text}>
            Тут ви зможете побачити інформацію по всіх користувачах, що
            заповнили форму на сайті. Щойно вони це зроблять :)
          </p>
        ) : (
          <ul>
            <li className={style.custometContainerHeader}>
              <p className={style.item}>Ім&apos;я</p>
              <p className={style.item}>Телефон</p>
              <p className={style.item}>Електронна пошта</p>
              <p className={style.item}>Повідомлення</p>
            </li>
            {[...customers].reverse().map((customer) => (
              <li key={customer.id} className={style.custometContainer}>
                <p className={style.item}>{customer.name}</p>
                <a href={`tel:${customer.phone}`} className={style.item}>
                  {customer.phone}
                </a>
                <a href={`mailto:${customer.email}`} className={style.item}>
                  {customer.email}
                </a>
                <p className={style.item}>{customer.message}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </Wrapper>
  );
};

export default Forms;
