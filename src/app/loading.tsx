'use client';

import React from 'react';

import style from './page.module.css';

export default function Loading() {
  return (
    <div className={style.loadContainer}>
      <p className={style.loadText}>Завантаження ...</p>
    </div>
  );
}
