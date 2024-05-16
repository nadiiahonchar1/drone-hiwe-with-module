import Image from 'next/image';
import Button from './components/Button/Button';
import MyImg from './components/MyImg/MyImg';
import Wrapper from './components/Wrapper/Wrapper';
import style from './page.module.css';
import team from '../assets/emwhee_logo_minimalistic_monotone_team_of_engineers_and_softwar_685efe77-84c7-43a1-bd9b-6d94cf643fcb-400x400.png';
import soldiers from '../assets/emwhee_soldiers_drones_and_robots_at_battle_in_steppes_of_Ukrai_52d7435b-fbbf-484f-841f-a86087451f35-400x400.png';
import bg from '../assets/hero-bg.svg';

export default function Home() {
  return (
    <main>
      <Wrapper>
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
              <Image src={bg} alt="Не важливо" className={style.bg} />
              <div className={style.bg}>
                <MyImg imgSrc={bg} alt="Не важливо" />
              </div>
              <div className={style.team}>
                <MyImg imgSrc={team} alt="Ілюстративне зображення команди" />
              </div>
              <div className={style.soldiers}>
                <MyImg imgSrc={soldiers} alt="Ілюстративне зображення солдат" />
              </div>
              <div className={style.containerGradient}>
                <div className={style.columnGradient}></div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </main>
  );
}
