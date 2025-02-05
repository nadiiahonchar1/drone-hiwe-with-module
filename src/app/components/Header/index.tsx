'use client';

import { useState } from 'react';
import { Provider } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import CartMenu from './cartMenu';
import headerNavLinks from '@/app/data/headerNavLinks';
import Link from '../Link';
import Logo from '@/app/components/Logo/Logo';
import store from '@/lib/store';
import { useAuth } from '@/app/store/AuthContext';
import style from './header.module.css';

const Header = () => {
  const { token } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Provider store={store}>
      <header className={style.header}>
        <nav className={style.container}>
          <div>
            <Link href="/" aria-label="Main page">
              <div className={style.headerLogo}>
                <div className={style.logoContainer}>
                  <Logo />
                </div>
              </div>
            </Link>
          </div>
          <div className={style.navLinks}>
            <ul className={style.ulLinks}>
              {headerNavLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className={style.navLink}>
                    <span>{link.title}</span>
                    <span className={style.spanLink}></span>
                  </Link>
                </li>
              ))}
            </ul>
            {token && (
              <ul className={style.ulLinksPrivat}>
                <li>
                  <Link href="/admin" className={style.navLink}>
                    <span>Адмінка</span>
                    <span className={style.spanLink}></span>
                  </Link>
                </li>
                <li>
                  <Link href="/admin/customers" className={style.navLink}>
                    <span>Клієнти</span>
                    <span className={style.spanLink}></span>
                  </Link>
                </li>
                <li>
                  <Link href="/admin/new-products" className={style.navLink}>
                    <span>Нові продукти</span>
                    <span className={style.spanLink}></span>
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div className={style.navLinksMobile}>
            <div
              onClick={toggleMenu}
              className={`${style.menuIcon} ${
                menuOpen ? style.rotateClose : style.rotateOpen
              }`}
            >
              <FontAwesomeIcon
                icon={menuOpen ? faXmark : faBars}
                size="2xl"
                style={{ color: '#8e8001' }}
              />
            </div>
            {menuOpen && (
              <ul
                className={`${style.ulLinksMobile} ${
                  menuOpen ? style.menuOpen : style.menuClose
                }`}
              >
                {headerNavLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className={style.navLink}
                      onClick={toggleMenu}
                    >
                      <span>{link.title}</span>
                      <span className={style.spanLink}></span>
                    </Link>
                  </li>
                ))}
                {token && (
                  <>
                    <li>
                      <Link
                        href="/admin"
                        className={style.navLink}
                        onClick={toggleMenu}
                      >
                        <span>Адмінка</span>
                        <span className={style.spanLink}></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/customers"
                        className={style.navLink}
                        onClick={toggleMenu}
                      >
                        <span>Клієнти</span>
                        <span className={style.spanLink}></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/new-products"
                        className={style.navLink}
                        onClick={toggleMenu}
                      >
                        <span>Нові продукти</span>
                        <span className={style.spanLink}></span>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            )}
          </div>
          <CartMenu />
        </nav>
      </header>
    </Provider>
  );
};

export default Header;
