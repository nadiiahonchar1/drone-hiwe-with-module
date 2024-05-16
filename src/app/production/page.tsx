import droneImg from '../../assets/emwhee_war_drone_with_computer_vision_logo_minimalistic_monoton_cbcbfb68-25f2-41cc-8332-d63165bfccc4.png';
import repeaterImg from '../../assets/emwhee_minimalistic_logo_of_radio_repeater_with_2_antennas_conn_02658b5a-fe17-451d-970f-e018f6a7e0dc.png';
import antennaImg from '../../assets/emwhee_coil_radio_antenna_logo_minimalistic_monotone_a28a9040-6117-43c2-bac5-ff3abb3c56fb.png';
import moduleImg from '../../assets/1drone_assembly_by_tinkerer_fe194485-6561-4cf5-989f-4aff958e1fd8-1.png';
import saperImg from '../../assets/2_minimalistic_illustration_of_device_for_explosion_initia_3fa34307-1eeb-4e0d-9d28-7d473998f874-1.png';
import Wrapper from '../components/Wrapper/Wrapper';
import style from './production.module.css';
import Button from '../components/Button/Button';
import MyImg from '../components/MyImg/MyImg';

export default function Production() {
  return (
    <main>
      <Wrapper>
        <h1 className={style.productionHead}>Продукція</h1>
        <ul>
          <li className={style.productionList}>
            <article>
              <h2 className={style.productionTitle}>
                БПАК <span lang="en">“HIVE”</span>
              </h2>
              <div className={style.description}>
                <MyImg
                  imgSrc={droneImg}
                  alt="Зображення логотипу бойового безпілотника"
                />
                <div className={style.aboutProduct}>
                  <p>
                    БПАК “HIVE”, з’явився внаслідок еволюції запитів військових
                    на постачання дронами за час війни, в наслідок чого
                    з’явилась ідея систематизувати запити і підійти більш
                    системно до комплектації, нових та вже існуючих підрозділів
                    ЗСУ, що в свою чергу дозволяє більш якісно та ефективно
                    виконувати бойові задачі.
                  </p>
                  <p>
                    Кожен борт ми розцінюємо як певну платформу для засобів
                    враження, зв’язку та розвідки, тому ми одразу розробляли
                    наші модулі до дронів з розрахунку що кожен дрон повинен
                    мати змогу змінити своє призначення за вкрай короткий час з
                    мінімальною кількістю задіяних інструментів(в ідеалі без
                    них). Тому особливу увагу ми виділяємо комплектації бортів
                    допоміжними модулями (особливо модулями зв’язку). В якості
                    станцій зв’язку ми віддаємо перевагу ретрансляторах
                    повітряного базування (оператори і ретранслятори в цьому
                    випадку менше нараженні на небезпеку)
                  </p>
                  <Button buttonText="Перейти до каталогу" redirectPath="#" />
                </div>
              </div>
            </article>
          </li>
          <li className={style.productionList}>
            <article>
              <h2 className={style.productionTitle}>Ретранслятори</h2>
              <div className={style.description}>
                <div className={style.aboutProduct}>
                  <p>
                    Випускаємо модулі ретрансляторів та радіо-репітерів
                    повітряного та наземного базування. Віддаємо перевагу
                    модулям ретрансляторів повітряного базування так як вони
                    працюють більш ефективно та менше видають позиції
                    операторів.
                  </p>
                  <p>
                    Робочі частоти від 1,2ГГц до 5,8 ГГц, для каналу відео
                    передачі, та від 250МГц до 1,1 ГГц для передачі сигналів
                    радіо-керування.
                  </p>
                  <Button buttonText="Перейти до каталогу" redirectPath="#" />
                </div>
                <MyImg
                  imgSrc={repeaterImg}
                  alt="Зображення логотиу радіоретранслятора з двома антенами"
                />
              </div>
            </article>
          </li>
          <li className={style.productionList}>
            <article>
              <h2 className={style.productionTitle}>Антени</h2>
              <div className={style.description}>
                <MyImg imgSrc={antennaImg} alt="Зображення логотипу антени" />
                <div className={style.aboutProduct}>
                  <p>
                    Кожна наша антена йде з вказанням індивідуальних параметрів
                    КСХН, підсилення в заданому діапазоні частот та інше. На
                    нашу думку якісна антена є чи не найголовнішою запорукою
                    стабільної та якісної роботи каналу радіо зв’язку.
                  </p>
                  <Button buttonText="Перейти до каталогу" redirectPath="#" />
                </div>
              </div>
            </article>
          </li>
          <li className={style.productionList}>
            <article>
              <h2 className={style.productionTitle}>Модулі Для БПЛА</h2>
              <div className={style.description}>
                <div className={style.aboutProduct}>
                  <p>
                    Зможемо повністю закомплектувати ваше замовлення
                    компонентами та модулями нашого, вітчизняного або
                    закордонного виробництва такими як: рами, мотори, гвинти,
                    політні контроллери, політні стеки, різноманітні датчики та
                    модулі (від безпечного взведення до важких систем скиду),
                    камери від звичайних до термічних, модулі нічної підсвітки,
                    корпуса та моделі літаків та крил.
                  </p>
                  <p>
                    Дзвоніть без вагань завжди раді допомогти і по-співпрацювати
                    над вирішенням задач
                  </p>
                  <Button buttonText="Перейти до каталогу" redirectPath="#" />
                </div>
                <MyImg
                  imgSrc={moduleImg}
                  alt="Зображення логотипу модуля для БПЛА"
                />
              </div>
            </article>
          </li>
          <li className={style.productionList}>
            <article>
              <h2 className={style.productionTitle}>Саперні Пристрої</h2>
              <div className={style.description}>
                <MyImg
                  imgSrc={saperImg}
                  alt="Зображення логотипу саперного пристрою"
                />
                <div className={style.aboutProduct}>
                  <p>
                    В наслідок тісної співпраці з саперними підрозділами ми
                    розробили цілу лінійку саперних пристроїв що дозволяє
                    зробити роботу кожного сапера – безпечнішою, зручнішою та
                    більш ефективною. З радістю надамо по запиту повний перелік
                    нашої продукції, тож дзвоніть без вагань
                  </p>
                  <Button buttonText="Перейти до каталогу" redirectPath="#" />
                </div>
              </div>
            </article>
          </li>
        </ul>
      </Wrapper>
    </main>
  );
}
