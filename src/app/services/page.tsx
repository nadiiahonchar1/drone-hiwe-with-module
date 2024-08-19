import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import Wrapper from '../components/Wrapper/Wrapper';
import Button from '../components/Button/Button';
import printer from '@/assets/3d_printing.png';
import scaner from '@/assets/3d_scanner.png';
import epoxy from '@/assets/epoxy.png';
import carbo from '@/assets/carbo.png';
import metal from '@/assets/metal_machining_producing_p.png';
import pcb from '@/assets/pcb_creation_process-ar.png';
import style from './services.module.css';

export default function Services() {
  return (
    <Wrapper>
      <section className={style.heroSection}>
        <p className={style.heroText}>
          Розділ Для Тих Хто Хоче Знайти Вирішення Його Задачі Або Реалізувати
          Ідею
        </p>
        <p className={style.heroCall}>
          Розділ про наші сервіси які можна розділити на 2 великі групи –
          Розробка та Виробництво
        </p>
      </section>
      <section>
        <div className={style.line}>
          <div className={style.circle}>
            <FontAwesomeIcon
              icon={faArrowDown}
              size="2xl"
              style={{ color: '#f2f3f5' }}
              aria-hidden="true"
              className={style.icon}
            />
          </div>
        </div>
        <div className={style.sectionContainer}>
          <h2 className={style.productTitle}>Сервіси З Розробкия</h2>
          <ul className={style.flexContainerWrapp}>
            <li className={style.productList}>
              <article className={style.productArticle}>
                <h3 lang="en" className={style.productListTitle}>
                  Application development
                </h3>
                <p className={style.aboutProductList}>
                  Одна з головних експертиз нашої команди розробка Програмного
                  забезпечення. Наша команда має досвід в розробці починаючи з
                  веб додатків закінчуючи Програмним забезпеченням для
                  вбудованих систем (мікроконтроллери та SBC). також маємо
                  досвід розробки ПЗ з використанням машинного зору та кастомних
                  нейронних мереж.
                </p>
                <p className={style.aboutProductList}>
                  Тож не вагайтесь дайте нам знати про вашу задачу або проблему,
                  а рішення для неї ми підберем і реалізуємо
                </p>
              </article>
              <div className={style.buttonContainer}>
                <Button
                  buttonText="Зв'язатися з нами"
                  redirectPath="/contact"
                />
              </div>
            </li>
            <li className={style.productList}>
              <article className={style.productArticle}>
                <h3 lang="en" className={style.productListTitle}>
                  3D modeling & mechanical design
                </h3>
                <p className={style.aboutProductList}>
                  Значна частина нашої команди має професійний досвід в
                  проектуванні та розробцірізноманітних машин та їх вузлів,
                  виробничих ліній та запчастин до військової, аграрної,
                  будівельної, та гірничої техніки, тож спираючись на наш
                  багаторічний досвід ми можемо з впевненістю сказати, що – ми
                  знайдемо ефетивне рішення для вашої задачі яким ви залишетесь
                  задоволенні
                </p>
              </article>
              <div className={style.buttonContainer}>
                <Button
                  buttonText="Зв'язатися з нами"
                  redirectPath="/contact"
                />
              </div>
            </li>
            <li className={style.productList}>
              <article className={style.productArticle}>
                <h3 lang="en" className={style.productListTitle}>
                  Designing & Development Of Electronics And PCBs
                </h3>
                <p className={style.aboutProductList}>
                  Готові розібратися з вашою задачею і знайти правльне рішенн
                  для неї що буде відповідати вашим вимогам та виразити це в
                  технічному завданні (50% успіху), що допоможе нам як найшвидше
                  розробити всю необхідні технічну та технологічну документацію
                  на основні електронні системи та допоміжні компоненти
                  пристроїв та устаткування. тож не вайгайтесь дзвоніть і
                  реалізуємо вашу ідею
                </p>
              </article>
              <div className={style.buttonContainer}>
                <Button
                  buttonText="Зв'язатися з нами"
                  redirectPath="/contact"
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className={style.line}>
          <div className={style.circle}>
            <FontAwesomeIcon
              icon={faArrowDown}
              size="2xl"
              style={{ color: '#f2f3f5' }}
              aria-hidden="true"
              className={style.icon}
            />
          </div>
        </div>
        <div className={style.sectionContainer}>
          <h2 className={style.productTitle}>Виробничі сервіси</h2>
          <ul className={style.list}>
            <div className={style.cardContainer}>
              <li className={style.listItem}>
                <article className={style.listArticle}>
                  <h3 className={style.listTitle}>3D Друк</h3>
                  <Image src={printer} alt="3D Друк" className={style.img} />
                </article>
                <div className={style.buttonContainer}>
                  <Button
                    buttonText="Зв'язатися з нами"
                    redirectPath="/contact"
                  />
                </div>
              </li>
              <li className={style.listItem}>
                <article className={style.listArticle}>
                  <h3 className={style.listTitle}>3D Сканування</h3>
                  <Image
                    src={scaner}
                    alt="3D Сканування"
                    className={style.img}
                  />
                </article>
                <div className={style.buttonContainer}>
                  <Button
                    buttonText="Зв'язатися з нами"
                    redirectPath="/contact"
                  />
                </div>
              </li>
            </div>
            <div className={style.cardContainer}>
              <li className={style.listItem}>
                <article className={style.listArticle}>
                  <h3 className={style.listTitle}>
                    Виготовлення деталей та форм з силікону та поліуретану.
                  </h3>
                  <Image
                    src={epoxy}
                    alt="Виготовлення деталей та форм з силікону та поліуретану."
                    className={style.img}
                  />
                </article>
                <div className={style.buttonContainer}>
                  <Button
                    buttonText="Зв'язатися з нами"
                    redirectPath="/contact"
                  />
                </div>
              </li>
              <li className={style.listItem}>
                <article className={style.listArticle}>
                  <h3 className={style.listTitle}>
                    Виробництво композитних деталейя
                  </h3>
                  <Image
                    src={carbo}
                    alt="Виробництво композитних деталей"
                    className={style.img}
                  />
                </article>
                <div className={style.buttonContainer}>
                  <Button
                    buttonText="Зв'язатися з нами"
                    redirectPath="/contact"
                  />
                </div>
              </li>
            </div>
            <div className={style.cardContainer}>
              <li className={style.listItem}>
                <article className={style.listArticle}>
                  <h3 className={style.listTitle}>Метало-обробка</h3>
                  <Image
                    src={metal}
                    alt="Метало-обробкак"
                    className={style.img}
                  />
                </article>
                <div className={style.buttonContainer}>
                  <Button
                    buttonText="Зв'язатися з нами"
                    redirectPath="/contact"
                  />
                </div>
              </li>
              <li className={style.listItem}>
                <article className={style.listArticle}>
                  <h3 className={style.listTitle}>
                    Виробництво електроніки та електронних плат
                  </h3>
                  <Image
                    src={pcb}
                    alt="Виробництво електроніки та електронних плат"
                    className={style.img}
                  />
                </article>
                <div className={style.buttonContainer}>
                  <Button
                    buttonText="Зв'язатися з нами"
                    redirectPath="/contact"
                  />
                </div>
              </li>
            </div>
          </ul>
        </div>
      </section>
    </Wrapper>
  );
}
