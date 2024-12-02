'use client';
import Product from '../components/Products/products';
import Wrapper from '../components/Wrapper/Wrapper';
// import { useRef } from 'react';
// import { Provider } from 'react-redux';
// import { makeStore, AppStore } from '@/lib/store';
// import { ReduxProvider } from '../hooks/ReduxProvider';
// import StoreProvider from '../StoreProvider';
import style from './shop.module.css';

export default function Shop() {
  return (
    <Wrapper>
      {/* <StoreProvider> */}
      <section className={style.heroSection}>
        <h1 className={style.heroText}>Магазин</h1>
      </section>
      <Product />
      {/* </StoreProvider> */}
    </Wrapper>
  );
}
