'use client';

// import firebase from 'firebase/app';
import { signInWithEmailAndPassword, getAuth, signOut } from 'firebase/auth';
// import React, { useState } from 'react';
import { app } from '../api/firebase';
const auth = getAuth(app);

let token: string | null = null;

export const getToken = (): string | null => {
  return token;
};
// const [token, setToken] = useState<string>('');

// interface UserWithAccessToken extends firebase.User {
//   accessToken: string;
// }

// export const token = auth.currentUser.accessToken || null;

// export const getToken = () => {
//   if (auth.currentUser) {
//     const userWithToken = auth.currentUser as UserWithAccessToken;
//     return userWithToken.accessToken;
//   }
//   return null;
// };

export const isLoggedIn = (): boolean => {
  return !!auth.currentUser;
};

export const loginUser = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // console.log('User', user.refreshToken);
      token = user.refreshToken;

      // console.log('Token', getTocken());

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
      // Sign-out successful.
      // console.log('Token', getTocken());
      token = null;
    })
    .catch((error) => {
      // An error happened.
    });
};
