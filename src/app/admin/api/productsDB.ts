'use client';

import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';
import Cookies from 'js-cookie';
import FormData from '../components/ProductForm/interfaces';

export const addProduct = async (formData: FormData): Promise<any> => {
  const token = Cookies.get('token');

  if (!token) {
    throw new Error('Користувач не авторизований');
  }

  try {
    await addDoc(collection(db, 'products'), formData);
  } catch (e) {
    console.error('Помилка при відправці даних форми реєстрації:', e);
    throw e;
  }
};

export const getProducts = async (): Promise<FormData[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const myData: FormData[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data() as FormData;
      myData.push({ ...data, id: doc.id });
    });

    return myData;
  } catch (e) {
    console.error('Помилка при отриманні даних продуктів:', e);
    throw e;
  }
};

export const getProductsByCategory = async (
  category: string
): Promise<FormData[]> => {
  try {
    const q = query(
      collection(db, 'products'),
      where('category', '==', category)
    );
    const querySnapshot = await getDocs(q);
    const myData: FormData[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data() as FormData;
      myData.push({ ...data, id: doc.id });
    });

    return myData;
  } catch (e) {
    console.error(
      `Помилка при отриманні продуктів за категорією ${category}:`,
      e
    );
    throw e;
  }
};