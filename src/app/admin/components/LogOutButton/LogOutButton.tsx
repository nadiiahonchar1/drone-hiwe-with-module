'use client';
import React, { FormEvent } from 'react';
import { logOut, getToken, isLoggedIn } from '../../api/auth';

const LogOutButton: React.FC = () => {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const user = await logOut();
      console.log('Користувач успішно вийшов');
      console.log('Token', getToken());
      console.log('isLoggedIn', isLoggedIn());
    } catch (error) {
      console.error('Помилка виходу:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">LogOut</button>
    </form>
  );
};

export default LogOutButton;
