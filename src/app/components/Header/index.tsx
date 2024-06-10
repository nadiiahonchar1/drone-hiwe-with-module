'use client';
import Link from '../Link';
import headerNavLinks from '../../data/headerNavLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Logo from '@/assets/Logo.png';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import style from './header.module.css';
import { useAuth } from '@/app/store/AuthContext';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = () => {
  const { token } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={style.header}>
      <nav className={style.container}>
        <div>
          <Link href="/" aria-label="Main page">
            <div className={style.headerLogo}>
              <div className={style.logoContainer}>
                <Image
                  src={Logo}
                  alt="Logo icon"
                  priority={true}
                  className={style.logo}
                />
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
            <ul className={style.ulLinks}>
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
        <div className={style.cartBox}>
          <Link href="/cart" aria-label="Cart">
            <ShoppingBasketOutlinedIcon
              sx={{ color: '#8e8001', fontSize: 40 }}
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
