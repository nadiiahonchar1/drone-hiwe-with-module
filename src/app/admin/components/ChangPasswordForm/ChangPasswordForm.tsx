'use client';
import React, { useState, FormEvent } from 'react';
import { changePassword, getToken, isLoggedIn } from '../../api/auth';
// import style from './loginForm.module.css';

const ChangPasswordForm: React.FC = () => {
  //   const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const user = await changePassword(password, newPassword);
      console.log('Користувач зайшов', user);
      console.log('Token', getToken());
      console.log('isLoggedIn', isLoggedIn());
      //   setEmail('');
      setPassword('');
      setNewPassword('');
      alert('Ви успішно змінили пароль)');
    } catch (error) {
      console.error('Помилка входу', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div> */}
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
      <div>
        <label htmlFor="newPassword">new Password:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Change</button>
    </form>
  );
};

export default ChangPasswordForm;
