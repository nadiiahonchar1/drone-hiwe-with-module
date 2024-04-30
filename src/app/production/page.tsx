import Image from 'next/image';
import hiveImg from '../../assets/emwhee_war_drone_with_computer_vision_logo_minimalistic_monoton_cbcbfb68-25f2-41cc-8332-d63165bfccc4.png';
import Wrapper from '../components/Wrapper/Wrapper';
import style from './production.module.css';

export default function Production() {
  return (
    <main>
      <Wrapper>
        <h1 className={style.productionHead}>Продукція</h1>
        <article>
          <h2 className={style.productionTitle}>
            БПАК <span lang="en">“HIVE”</span>
          </h2>
          <div className={style.description}>
            <Image
              src={hiveImg}
              alt="Зображення бойового безпілотника з мінімалістичним монотонним логотипом комп'ютерного зору"
              className={style.img}
            />
            <div className={style.aboutProduct}>
              <p>
                БПАК “HIVE”, з’явився внаслідок еволюції запитів військових на
                постачання дронами за час війни, в наслідок чого з’явилась ідея
                систематизувати запити і підійти більш системно до комплектації,
                нових та вже існуючих підрозділів ЗСУ, що в свою чергу дозволяє
                більш якісно та ефективно виконувати бойові задачі.
              </p>
              <p>
                Кожен борт ми розцінюємо як певну платформу для засобів
                враження, зв’язку та розвідки, тому ми одразу розробляли наші
                модулі до дронів з розрахунку що кожен дрон повинен мати змогу
                змінити своє призначення за вкрай короткий час з мінімальною
                кількістю задіяних інструментів(в ідеалі без них). Тому особливу
                увагу ми виділяємо комплектації бортів допоміжними модулями
                (особливо модулями зв’язку). В якості станцій зв’язку ми
                віддаємо перевагу ретрансляторах повітряного базування
                (оператори і ретранслятори в цьому випадку менше нараженні на
                небезпеку)
              </p>
            </div>
          </div>
        </article>
      </Wrapper>
    </main>
  );
}
