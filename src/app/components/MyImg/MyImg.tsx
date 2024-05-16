import React from 'react';
import Image, { StaticImageData } from 'next/image';
import style from './myImg.module.css';

interface MyImgProps {
  imgSrc: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
}

const MyImg: React.FC<MyImgProps> = ({ imgSrc, alt, width, height }) => {
  const src = typeof imgSrc === 'string' ? imgSrc : imgSrc.src;

  return (
    <Image
      src={src}
      alt={alt}
      className={style.img}
      width={width}
      height={height}
    />
  );
};

export default MyImg;
