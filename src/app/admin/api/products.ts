'use client'
import { database } from "./firebase";
import {
  ref,
  query,
  orderByChild,
  equalTo,
  get,
} from 'firebase/database';
import Cookies from 'js-cookie';
import FormData from "../components/ProductForm/interfaces";

const token = Cookies.get('token');

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

export const getProductsByCategory = async (category: string): Promise<FormData[]> => {
 
  try {
    console.log('in getProguct')
    const productsRef = ref(database, 'products');
    console.log('productsRef', productsRef);
    const categoryQuery = query(
      productsRef,
      orderByChild('category'),
      equalTo(category)
    );
    console.log('categoryQuery', productsRef);
    const snapshot = await get(categoryQuery);

    const products: FormData[] = [];
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        products.push({ id: childSnapshot.key, ...childSnapshot.val() });
      });
    }
    return products;
  } catch (error) {
    console.error('Помилка при отриманні даних продуктів:', error);
    throw error;
  }
};
    
export const addProduct = (product: any) => {

  return fetch(`${url}?auth=${token}`, {
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
    .catch((error) => {
      console.error('Помилка при отриманні даних користувачів:', error);
      throw error;
    });
};