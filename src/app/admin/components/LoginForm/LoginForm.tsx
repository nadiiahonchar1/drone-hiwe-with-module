'use client';
import React, { useState, FormEvent } from 'react';
import { loginUser, getToken, isLoggedIn } from '../../api/auth';
import style from './loginForm.module.css';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const user = await loginUser(email, password);
      console.log('Користувач зайшов', user);
      console.log('Token', getToken());
      console.log('isLoggedIn', isLoggedIn());
      setEmail('');
      setPassword('');
      alert('Ви в адмінці, почнемо працювати :)');
    } catch (error) {
      console.error('Помилка входу', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.formContainer}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
