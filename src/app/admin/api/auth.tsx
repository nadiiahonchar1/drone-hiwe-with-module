'use client';

import {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from 'firebase/auth';
import { app } from '../api/firebase';
const auth = getAuth(app);

let token: string | null = null;

export const getToken = (): string | null => {
  return token;
};

export const isLoggedIn = (): boolean => {
  return !!auth.currentUser;
};

export const loginUser = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      token = user.refreshToken;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Помилка (${errorCode}): ${errorMessage}`);
      throw error;
    });
};
export const logOut = () => {
  signOut(auth)
    .then(() => {
      token = null;
    })
    .catch((error) => {});
};

export const changePassword = (
  currentPassword: string,
  newPassword: string
) => {
  const user = auth.currentUser;

  if (!user || !user.email) {
    throw new Error('Користувач не авторизований.');
  }

  const credential = EmailAuthProvider.credential(user.email, currentPassword);

  return reauthenticateWithCredential(user, credential)
    .then(() => {
      return updatePassword(user, newPassword);
    })
    .then(() => {
      console.log('Пароль успішно змінено.');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Помилка при зміні паролю (${errorCode}): ${errorMessage}`);
      throw error;
    });
};
