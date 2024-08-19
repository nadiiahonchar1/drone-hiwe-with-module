import React from 'react';
import Link from 'next/link';

import style from './button.module.css';

interface ButtonProps {
  buttonText: string;
  redirectPath: string;
}

const Button: React.FC<ButtonProps> = ({ buttonText, redirectPath }) => {
  return (
    <Link href={redirectPath}>
      <button className={style.button}>{buttonText}</button>
    </Link>
  );
};

export default Button;
