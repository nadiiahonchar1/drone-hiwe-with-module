'use client';
import { useEffect } from 'react';
import LoginForm from '../admin/components/LoginForm/LoginForm';
import Wrapper from '../components/Wrapper/Wrapper';
import LogOutButton from './components/LogOutButton/LogOutButton';
import { getToken, isLoggedIn } from './api/auth';
export default function Admin() {
  return (
    <>
      <Wrapper>
        <LoginForm />
        <LogOutButton />
      </Wrapper>
    </>
  );
}
