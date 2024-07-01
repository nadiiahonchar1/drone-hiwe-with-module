'use client'

const url =
  'https://drone-hive-d6daa-default-rtdb.europe-west1.firebasedatabase.app/products.json';
  
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
    
export const addProduct = (product: any) => {

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Помилка при відправці даних.');
      }
      return response.json();
    })
    // .then((data) => {
    //   console.log('Дані успішно відправлені:', data);
    //   return data;
    // })
    .catch((error) => {
      console.error('Помилка при отриманні даних користувачів:', error);
      throw error;
    });
};