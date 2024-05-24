import style from './projects.module.css';
export default function Project() {
  return (
    <>
      <section className={style.heroSection}>
        <div>
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
    </>
  );
}
