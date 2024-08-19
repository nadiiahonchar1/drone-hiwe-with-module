import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faIndustry } from '@fortawesome/free-solid-svg-icons';

import style from './projects.module.css';

export default function Project() {
  return (
    <>
      <section className={style.heroSection}>
        <div className={style.typeProjectTitle}>
          <h1 className={style.title}>Проекти</h1>
          <p className={style.text}>
            Наші проекти можна розділити на 3 групи: продуктові, виробничі та
            програмні.
          </p>
        </div>
        <ul>
          <li className={style.typeProject}>
            <h2 className={style.projectTitle}>Продуктові</h2>
            <p className={style.projectText}>
              ЦЕ ПРОЕКТИ БПАК, БПЛА, НАЗЕМНИХ СТАНЦІЙ, РЕТРАНСЛЯТОРІВ, САПЕРНИХ
              ПРИСТРОЇВ ТА ІНШЕ. ЦЕ ВСЕ ТЕ ЩО ПОТРІБНО ВІЙСЬКОВИМ
            </p>
          </li>
          <li className={style.typeProjectLeft}>
            <h2 className={style.projectTitle}>Виробничі</h2>
            <p className={style.projectText}>
              ПРОЕКТИ ПОВ’ЯЗАНІ З ЛОКАЛІЗАЦІЄЮ ВИРОБНИЦТВА КОМПЛЕКТУЮЧИХ ДЛЯ
              ДРОНІВ ТА ІНШИХ СИСТЕМ
            </p>
          </li>
          <li className={style.typeProject}>
            <h2 className={style.projectTitle}>Програмні</h2>
            <p className={style.projectText}>
              КАСТОМНІ ПРОШИВКИ ПРИЙМАЧІВ І ПЕРЕДАВАЧІВ, СИСТЕМИ ОПТИЧНОЇ
              НАВІГАЦІЇ ТА АВТОМАТИЗОВАНОГО ВИКОНАННЯ БОЙОВИХ ЗАВДАНЬ, СТВОРЕННЯ
              АЛЬТЕРНАТИВНИХ ЗАВАДОЗАХИЩЕНИХ КАНАЛІВ ЗВ’ЯЗКУ
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2 className={style.projectSectionTitle}>
          Плани Та Стадії Реалізації Поточних Та Майбутніх Проектів
        </h2>
        <div className={style.projectSection}>
          <div className={style.aboutProjects}>
            <div className={style.growContainer}>
              <div className={style.iconTitle}>
                <FontAwesomeIcon
                  icon={faShuttleSpace}
                  rotation={270}
                  size="2xl"
                  style={{ color: '#8e8001' }}
                />
                <h3 className={style.aboutProjectsTitle}>Продуктові</h3>
              </div>
              <ul>
                <li className={style.descriptionProject}>
                  БПАК “HIVE” Комплексне Рішення Для Підрозділів, Індивідуальне
                  Оснащення Бортів, Та Резервування Каналів Керування
                  <p className={style.stageProduction}>Виробляється</p>
                </li>
                <li className={style.descriptionProject}>
                  Мульти-Роторні Платформи Від 7 До 12 Дюймів, Під Різноманітні
                  Задачі, Індивідуальне Оснащення Бортів Під Вимоги
                  <p className={style.stageProduction}>Виробляється</p>
                </li>
                <li className={style.descriptionProject}>
                  Ретранслятори Наземного Та Повітряного Базування Для Відео Та
                  Керування
                  <p className={style.stageProduction}>Виробляється</p>
                </li>
                <li className={style.descriptionProject}>
                  Модулі Безпечного Взведення БЧ, Та Гарантованого Враження Та
                  Самознищення
                  <p className={style.stageProduction}>Виробляється</p>
                </li>
                <li className={style.descriptionProject}>
                  Радіо Та Проводові Підривачі Та Обладнання Для Саперів
                  <p className={style.stageProduction}>Виробляється</p>
                </li>
              </ul>
            </div>
            <div className={style.growContainer}>
              <div className={style.iconTitle}>
                <FontAwesomeIcon
                  icon={faCode}
                  size="2xl"
                  style={{ color: '#8e8001' }}
                />
                <h3 className={style.aboutProjectsTitle}>Програмні</h3>
              </div>
              <ul>
                <li className={style.descriptionProject}>
                  ПЗ Для SBC, По Забезпеченню Автономного Виконання Бойових
                  Задач
                  <p className={style.stageDevelopment}>Ведеться розробка</p>
                  <p className={style.stageDevelopment}>
                    Кінець тестів до 05.24
                  </p>
                </li>
                <li className={style.descriptionProject}>
                  МПЗ(SBC), Для Оптичної Навігації
                  <p className={style.stageDevelopment}>Ведеться розробка</p>
                  <p className={style.stageDevelopment}>
                    Кінець тестів до 04.24
                  </p>
                </li>
                <li className={style.descriptionProject}>
                  ПЗ(SBC) Для Автоматизованого Та Автономного Враження Цілі
                  <p className={style.stageDevelopment}>Ведеться розробка</p>
                  <p className={style.stageDevelopment}>
                    Кінець тестів до 06.24
                  </p>
                </li>
                <li className={style.descriptionProject}>
                  ПЗ(МК) Для Самознищення В Разі Захоплення Супротивником, По
                  Часу, Або Переведення БПЛА В Режим Міни
                  <p className={style.stageDevelopment}>Ведеться розробка</p>
                  <p className={style.stageDevelopment}>
                    Кінець тестів до 06.24
                  </p>
                </li>
              </ul>
            </div>
            <div className={style.growContainer}>
              <div className={style.iconTitle}>
                <FontAwesomeIcon
                  icon={faIndustry}
                  size="2xl"
                  style={{ color: '#8e8001' }}
                />
                <h3 className={style.aboutProjectsTitle}>Виробничі</h3>
              </div>
              <ul>
                <li className={style.descriptionProject}>
                  Локалізація Виробництва BLDC Моторів Для Дронів Та Інших
                  Платформ
                  <p className={style.stageNonFinancing}>Пошук фінансування</p>
                  <p className={style.stageNonFinancing}>
                    Термін запуску до 14 т
                  </p>
                </li>
                <li className={style.descriptionProject}>
                  Локалізація Виробництва Політних Стеків Та Інших Електронних
                  Плат
                  <p className={style.stageNonFinancing}>Пошук фінансування</p>
                  <p className={style.stageNonFinancing}>
                    Термін запуску до 8 т
                  </p>
                </li>
                <li className={style.descriptionProject}>
                  Локалізація Виробництва Карбонових Рам, Корпусів, Спец
                  Профілів Та Гвинтів
                  <p className={style.stageNonFinancing}>Пошук фінансування</p>
                  <p className={style.stageNonFinancing}>
                    Термін запуску до 4 т
                  </p>
                </li>
                <li className={style.descriptionProject}>
                  Розробка Та Виробництво Платформи Над Швидкого Дрона Камікадзе
                  Макс. Швидкість До 300 Км/Ч, Корисне Навантаження 1кг
                  <p className={style.stageDevelopment}>Ведеться розробка</p>
                  <p className={style.stageDevelopment}>
                    Кінець тестів до 06.24
                  </p>
                </li>
                <li className={style.descriptionProject}>
                  Оптова Закупівля Модулів Тепловізійних Камер (+10000 Шт В
                  Різних Комплектаціях)
                  <p className={style.stageNonFinancing}>Пошук фінансування</p>
                  <p className={style.stageNonFinancing}>
                    Термін запуску до 4 т
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
