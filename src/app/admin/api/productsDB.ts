'use client';

import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from 'firebase/firestore';
import Cookies from 'js-cookie';

import FormData from '@/app/helpers/typings';
import { db } from './firebase';

export const addProduct = async (formData: FormData): Promise<any> => {
  const token = Cookies.get('token');

  if (!token) {
    throw new Error('Користувач не авторизований');
  }
  try {
    await addDoc(collection(db, 'products'), formData);
    // console.log('formData', formData);
  } catch (e) {
    alert('Ой! Схоже ви розлогінились :(');
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

export const getProductsBySubCategory = async (
  subCategory: string
): Promise<FormData[]> => {
  try {
    const q = query(
      collection(db, 'products'),
      where('subCategory', '==', subCategory)
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
      `Помилка при отриманні продуктів за підкатегорією ${subCategory}:`,
      e
    );
    throw e;
  }
};

export const getProductByID = async (
  productId: string
): Promise<FormData | undefined> => {
  try {
    const docRef = doc(collection(db, 'products'), productId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data() as FormData;
      return { ...data, id: docSnap.id };
    } else {
      console.error(`Продукт з ID ${productId} не знайдений`);
      return undefined;
    }
  } catch (e) {
    console.error(`Помилка при отриманні продукту за ID ${productId}:`, e);
    throw e;
  }
};