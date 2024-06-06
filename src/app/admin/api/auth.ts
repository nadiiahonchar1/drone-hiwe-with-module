'use client';

import {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  User,
} from 'firebase/auth';

import Cookies from 'js-cookie';
import { app } from './firebase';

const auth = getAuth(app);

export const loginUser = (email: string, password: string): Promise<User> => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const token = user.refreshToken;
      Cookies.set('token', token, { expires: 7 });

      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Помилка (${errorCode}): ${errorMessage}`);
      throw error;
    });
};

export const logOut = (): Promise<void> => {
  return signOut(auth)
    .then(() => {
      Cookies.remove('token');
    })
    .catch((error) => {
      console.error('Помилка при виході:', error);
    });
};

export const changePassword = (
  currentPassword: string,
  newPassword: string
): Promise<void> => {
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
