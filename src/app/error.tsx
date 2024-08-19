'use client';

import { useEffect } from 'react';

import style from './page.module.css';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={style.errorPage}>
      <h2>Щось пішло не так!</h2>
      <button onClick={() => reset()}>Спробуйте ще раз</button>
    </div>
  );
}
