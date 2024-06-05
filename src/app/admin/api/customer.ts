'use client';
interface FormData {
  [key: string]: any;
}

export const registerUser = (formData: FormData): Promise<any> => {
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
    // .then((data) => {
    //   console.log('Дані успішно відправлені:', data);
    //   return data;
    // })
    .catch((error) => {
      console.error('Помилка при відправці даних форми реєстрації:', error);
      throw error;
    });
};