'use client';
import React, { FormEvent } from 'react';
import { logOut } from '../../api/auth';

const LogOutButton: React.FC = () => {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const user = await logOut();
      console.log('Користувач успішно вийшов');
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
