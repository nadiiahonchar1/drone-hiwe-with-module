'use client'

const url =
    'https://drone-hive-d6daa-default-rtdb.europe-west1.firebasedatabase.app/products';
  
export const getProducts = () => {
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Помилка при отриманні даних.');
        }
        return response.json();
      })
      .then((data) => {
        const users = [];
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
        
    }