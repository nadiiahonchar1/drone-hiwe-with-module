'use client';
import React, { FormEvent } from 'react';
import { logOut } from '../../api/auth';
import style from '../LoginForm/loginForm.module.css';

const LogOutButton: React.FC = () => {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const user = await logOut();
      alert('Ви вийшли з адмінки :(');
    } catch (error) {
      console.error('Помилка виходу:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.formContainer}>
      <p className={style.text}>Для виходу з адмінки натисніть вийти</p>
      <button type="submit" className={style.button}>
        Вийти
      </button>
    </form>
  );
};

export default LogOutButton;
