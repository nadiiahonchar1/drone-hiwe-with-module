import Image, { StaticImageData } from 'next/image';
import style from './contacts.module.css';
import img from '@/assets/banner-3.jpg';
export default function Contact() {
  return (
    <>
      <section className={style.heroSection}>
        <h1 className={style.heroTitle}>Наші контакти )</h1>
        <p className={style.heroText}>
          Напишіть Нам, Або Краще
          <br />
          Подзвоніть, Будь-Ласка :)
        </p>
        <p className={style.heroCall}>
          Нижче ви знайдете форму, в якій ви зможете залишити свій запит до нас,
          або краще і швидше наберіть нас
        </p>
      </section>
      <section className={style.sectionContainer}>
        <Image src={img} alt="Наша команда" className={style.img} />
        <h2>Подзвоніть Нам</h2>
      </section>
    </>
  );
}
