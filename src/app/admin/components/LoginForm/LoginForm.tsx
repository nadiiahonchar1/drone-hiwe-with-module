'use client';
import React, { useState, FormEvent } from 'react';
import { loginUser } from '../../api/auth';
import { useAuth } from '@/app/store/AuthContext';
import style from './loginForm.module.css';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { setToken } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const user = await loginUser(email, password);
      const token = await user.getIdToken();
      setToken(token);
      setEmail('');
      setPassword('');
      alert('Ви в адмінці, почнемо працювати :)');
    } catch (error) {
      console.error('Помилка входу', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.formContainer}>
      <p className={style.text}>
        Щоб зайти в адмінку введіть вашу пошту та пароль
      </p>
      <div>
        <label htmlFor="email" className={style.label}>
          Пошта:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={style.input}
        />
      </div>
      <div>
        <label htmlFor="password" className={style.label}>
          Пароль:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={style.input}
        />
      </div>
      <button type="submit" className={style.button}>
        Увійти
      </button>
    </form>
  );
};

export default LoginForm;
