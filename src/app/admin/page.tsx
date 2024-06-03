'use client';
import { useEffect } from 'react';
import LoginForm from '../admin/components/LoginForm/LoginForm';
import Wrapper from '../components/Wrapper/Wrapper';
import LogOutButton from './components/LogOutButton/LogOutButton';
import { getToken, isLoggedIn } from './api/auth';
import ChangPasswordForm from './components/ChangPasswordForm/ChangPasswordForm';
export default function Admin() {
  useEffect(() => {
    const token = getToken();
    const loggedIn = isLoggedIn();
    console.log('Token:', token);
    console.log('Is Logged In:', loggedIn);
  }, []);
  return (
    <>
      <Wrapper>
        <LoginForm />
        <ChangPasswordForm />
        <LogOutButton />
      </Wrapper>
    </>
  );
}
