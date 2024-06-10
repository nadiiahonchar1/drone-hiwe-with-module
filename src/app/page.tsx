import Image from 'next/image';
import Button from './components/Button/Button';
import MyImg from './components/MyImg/MyImg';
// import Wrapper from './components/Wrapper/Wrapper';
import style from './page.module.css';
import team from '../assets/emwhee_logo_minimalistic_monotone_team_of_engineers_and_softwar_685efe77-84c7-43a1-bd9b-6d94cf643fcb-400x400.png';
import soldiers from '../assets/emwhee_soldiers_drones_and_robots_at_battle_in_steppes_of_Ukrai_52d7435b-fbbf-484f-841f-a86087451f35-400x400.png';
// import bg from '../assets/hero-bg3.svg';
import droneEngineer from '../assets/emwhee_fpv_drone_assembly_by_engineer_4bb4fd62-b8e7-42af-a528-56fe348a5bcc-1-600x600.png';
import quadrocopter from '../assets/emwhee_assembly_of_fpv_war_quardocopter_by_engineer_as_oil_pain_32f65bf5-3221-46ab-86ff-68eb3aed0b5f-600x600.png';

export default function Home() {
  return (
    <>
      <h1 lang="en" className={style.visuallyHidden}>
        Drone Hive
      </h1>
      <section className={style.sectionContainer}>
        <div className={style.flexContainer}>
          <div className={style.columnWidth}>
            <h2 className={style.title}>
              Всім привіт! <br /> Ми є команда <br /> талановитих <br />
              <span>
                Патріотів Українців Інженерів Програмістів Електронщиків
                Менеджерів
              </span>
            </h2>
            <p className={style.text}>
              Ми зібрались разом і створюємо продукти виключно по запитам
              військових, щоб як можна більше збільшити ефективність
              використання наших систем
            </p>
            <Button
              buttonText="Дізнатись про те що ми робимо"
              redirectPath="/production"
            />
          </div>
          <div className={style.imgGradient}>
            {/* <Image src={bg} alt="Не важливо" className={style.bg} width={700} /> */}
            <div className={style.team}>
              <MyImg
                imgSrc={team}
                alt="Ілюстративне зображення команди"
                width={264}
                height={264}
              />
            </div>
            <div className={style.soldiers}>
              <MyImg
                imgSrc={soldiers}
                alt="Ілюстративне зображення солдат"
                width={264}
                height={264}
              />
            </div>
            <div className={style.containerGradient}>
              <div className={style.columnGradient}></div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.sectionContainer}>
        <div className={style.description}>
          <MyImg
            imgSrc={droneEngineer}
            alt="Зображення інженера"
            width={432}
            height={432}
          />
          <div>
            <h2 className={style.productionTitle}>
              КЕРУЄМОСЬ ЗАПИТАМИ, А НЕ ВЛАСНИМИ ВРАЖЕННЯМИ
            </h2>
            <p className={style.aboutProduct}>
              В своїй роботі особливу роль віддаємо зворотньому зв’язку від
              операторів наших систем
            </p>
          </div>
        </div>
      </section>
      <section className={style.sectionContainer}>
        <div className={style.descriptionRevert}>
          <div>
            <h2 className={style.productionTitle}>
              ГОТОВІ РОЗРОБИТИ ТА ВИРОБИТИ РІШЕННЯ ПІД КОНКРЕТНУ ЗАДАЧУ
            </h2>
            <p className={style.aboutProduct}>
              Знаємо – кожна ділянка фронту по своєму різна, на кожній ділянці
              фронту діють свої засоби протидії противника. Ми готові оснащувати
              наші комплекси під певні потреби підрозділів в плані модулів
              зв’язку, безпечного взведення та інше.
            </p>
          </div>
          <MyImg
            imgSrc={quadrocopter}
            alt="Зображення квадрокоптера"
            width={432}
            height={432}
          />
        </div>
      </section>
      <section className={style.sectionContainer}>
        <h2 className={style.productTitle}>Наша Продукція</h2>
        <ul className={style.flexContainerWrapp}>
          <li className={style.productList}>
            <article className={style.productArticle}>
              <h3 className={style.productListTitle}>БПАК</h3>
              <p className={style.aboutProductList}>
                Безпілотний авіаційний комплекс “HIVE”, оснащується –
                ретрансляторами повітряного базування, з різноманітними
                багатороторними БПЛА для скидання боєприпасів, враження
                супротивника самопідривом, ведення розвідки, та можливістю
                роботи в 24 години на добу за рахунок різноманітних модулів
                камери та інших рішень
              </p>
            </article>
            <div className={style.buttonContainer}>
              <Button buttonText="Переглянути" redirectPath="#" />
            </div>
          </li>
          <li className={style.productList}>
            <article className={style.productArticle}>
              <h3 className={style.productListTitle}>
                Дрони та підсистеми до них
              </h3>
              <p className={style.aboutProductList}>
                Системи: безпечного взведення БЧ, скиду, платформи для
                безпечного запуску дронів, системи гарантованого знищення дрону
                та різного роду підровачі
              </p>
            </article>
            <div className={style.buttonContainer}>
              <Button buttonText="Переглянути" redirectPath="#" />
            </div>
          </li>
          <li className={style.productList}>
            <article className={style.productArticle}>
              <h3 className={style.productListTitle}>Саперні Пристрої</h3>
              <p className={style.aboutProductList}>
                Спеціальні технічні засоби, призначені для виявлення,
                розмінування та нейтралізації небезпечних об’єктів
              </p>
            </article>
            <div className={style.buttonContainer}>
              <Button buttonText="Переглянути" redirectPath="#" />
            </div>
          </li>
          <li className={style.productList}>
            <article className={style.productArticle}>
              <h3 className={style.productListTitle}>
                Ретранслятори та станції зв’язку для БПЛА
              </h3>
              <p className={style.aboutProductList}>
                Ретранслятори та станції зв’язку для керування БПЛА, по запиту
                на конкретну частоту
              </p>
            </article>
            <div className={style.buttonContainer}>
              <Button buttonText="Переглянути" redirectPath="#" />
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
