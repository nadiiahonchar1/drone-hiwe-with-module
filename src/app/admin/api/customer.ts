'use client';
import Cookies from 'js-cookie';

interface User {
  id?: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}
const token = Cookies.get('token');

export const registerCustomer = (formData: User): Promise<any> => {
  const url =
    'https://drone-hive-d6daa-default-rtdb.europe-west1.firebasedatabase.app/customers.json';

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Помилка при відправці даних форми реєстрації.');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Помилка при відправці даних форми реєстрації:', error);
      throw error;
    });
};

export const getCustomer = (): Promise<User[]> => {
  const url =
    'https://drone-hive-d6daa-default-rtdb.europe-west1.firebasedatabase.app/customers.json';

  // const user = auth.currentUser;
  if (!token) {
    return Promise.reject(new Error('Користувач не авторизований.'));
  }

  return fetch(`${url}?auth=${token}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Помилка при отриманні даних користувачів.');
      }
      return response.json();
    })
    .then((data) => {
      const users: User[] = [];
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          users.push({ id: key, ...data[key] });
        }
      }
      return users;
    })
    .catch((error) => {
      console.error('Помилка при отриманні даних користувачів:', error);
      throw error;
    });
};