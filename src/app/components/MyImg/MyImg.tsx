import React from 'react';
import Image, { StaticImageData } from 'next/image';
import style from './myImg.module.css';

interface MyImgProps {
  imgSrc: string | StaticImageData;
  alt: string;
}

const MyImg: React.FC<MyImgProps> = ({ imgSrc, alt }) => {
  const src = typeof imgSrc === 'string' ? imgSrc : imgSrc.src;

  return (
    <Image src={src} alt={alt} className={style.img} width={300} height={300} />
  );
};

export default MyImg;
