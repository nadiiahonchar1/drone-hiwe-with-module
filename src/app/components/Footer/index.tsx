'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import Link from '../Link';
import headerNavLinks from '@/app/data/headerNavLinks';
import Logo from '@/assets/Logo.png';
import dron from '@/assets/drone_6316693.png';
import style from './footer.module.css';

const Footer = () => {
  const droneRef = useRef<HTMLImageElement | null>(null);
  const [menuOpenFooter, setMenuOpenFooter] = useState(false);

  const toggleMenu = () => {
    setMenuOpenFooter(!menuOpenFooter);
  };

  useEffect(() => {
    const drone = droneRef.current;

    const handleMouseEnter = () => {
      if (drone && !drone.classList.contains(style.animate)) {
        drone.classList.add(style.animate);
      }
    };

    const handleAnimationEnd = () => {
      if (drone) {
        drone.classList.remove(style.animate);
      }
    };

    if (drone) {
      drone.addEventListener('mouseenter', handleMouseEnter);
      drone.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (drone) {
        drone.removeEventListener('mouseenter', handleMouseEnter);
        drone.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, [droneRef]);

  return (
    <footer className={style.footer}>
      <nav className={style.container}>
        <div>
          <Link href="/" aria-label="Main page">
            <div className={style.footerLogo}>
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
        <ul className={style.navLinks}>
          {headerNavLinks.map((link) => (
            <li key={link.title}>
              <Link href={link.href} className={style.navLink}>
                <span>{link.title}</span>
                <span className={style.spanLink}></span>
              </Link>
            </li>
          ))}
        </ul>
        <div className={style.navLinksMobile}>
          <div
            onClick={toggleMenu}
            className={`${style.menuIcon} ${
              menuOpenFooter ? style.rotateClose : style.rotateOpen
            }`}
          >
            <FontAwesomeIcon
              icon={menuOpenFooter ? faXmark : faBars}
              size="2xl"
              style={{ color: '#8e8001' }}
            />
          </div>
          {menuOpenFooter && (
            <ul
              className={`${style.ulLinksMobile} ${
                menuOpenFooter ? style.menuOpenFooter : style.menuCloseFooter
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
            </ul>
          )}
        </div>
        <div className={style.dronBox}>
          <Image
            src={dron}
            alt="Ілюстративне фото дрона"
            priority={true}
            width={40}
            height={40}
            className={style.drone}
            ref={droneRef}
          />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
