'use client';

import uuid4 from 'uuid4';

import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Cookies from 'js-cookie';

import FormData from '@/app/helpers/typings';
import { db } from './firebase';
const storage = getStorage();

const uploadImageToStorage = async (
  image: File,
  path: string
): Promise<string> => {
  const storageRef = ref(storage, `gs://drone-hive-d6daa.appspot.com/${path}`);
  const snapshot = await uploadBytes(storageRef, image);
  const downloadURL = await getDownloadURL(snapshot.ref);
  return downloadURL;
};

export const addProduct = async (formData: FormData): Promise<any> => {
  const token = Cookies.get('token');

  if (!token) {
    throw new Error('Користувач не авторизований');
  }
  try {
    let productImageURL = '';
    if (formData.productImage && formData.productImage.length > 0) {
      const productImageFile = formData.productImage[0]; 
      productImageURL = await uploadImageToStorage(
        productImageFile,
        `products/${uuid4()}`
      );
    }

    let galleryImagesURLs: string[] = [];
    if (
      formData.galleryImages &&
      Array.isArray(formData.galleryImages) &&
      formData.galleryImages.length > 0
    ) {
      
      const urls = await Promise.all(
        formData.galleryImages.map(async (galleryImage) => {
          if (galleryImage.image && galleryImage.image[0] instanceof File) {
            const imageFile = galleryImage.image[0];
            return await uploadImageToStorage(imageFile, `products/${uuid4()}`);
          }
          return null;
        })
      );
      galleryImagesURLs = urls.filter((url): url is string => url !== null);
    }
    const productToUpload = {
      ...formData,
      productImageUrl: productImageURL,
      galleryImageUrls: galleryImagesURLs,
    }; 
    delete productToUpload.productImage;
    delete productToUpload.galleryImages;
    await addDoc(collection(db, 'products'), productToUpload);
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