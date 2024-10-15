'use client';

import Image from 'next/image';

import ContactForm from '../components/ContactForm/ContactForm';
import img from '@/assets/banner-3.webp';
import style from './contacts.module.css';

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
        <h2 className={style.addressTitle}>Подзвоніть Нам</h2>
        <address>
          <ul>
            <li className={style.addressContainer}>
              <p className={style.addressText}>Телефон</p>
              <a href="tel:+380989719139" className={style.addressLink}>
                +380 98 971 91 39
              </a>
            </li>
            <li className={style.addressContainer}>
              <p className={style.addressText}>Email</p>
              <a
                href="mailto:sales@drone-hive.tech"
                className={style.addressLink}
              >
                sales@drone-hive.tech
              </a>
            </li>
            <li className={style.addressContainer}>
              <p className={style.addressText}>Адреса</p>
              <a
                href="https://maps.app.goo.gl/JjhJdWkhqvGP5zWF9"
                target="_blank"
                className={style.addressLink}
              >
                Україна, м.Київ, Київська область, вул. Банкова 1, корп. 2, офіс
                12.
              </a>
            </li>
          </ul>
        </address>
      </section>
      <section className={style.contactSection}>
        <h3 className={style.addressTitle}>Або Напишіть Чи Шо)</h3>
        <p className={style.addressText}>Форма для зв’язку</p>
        <ContactForm />
      </section>
    </>
  );
}
