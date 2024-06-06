'use client';
import { useEffect, useRef } from 'react';
import Link from '../Link';
import headerNavLinks from '../../data/headerNavLinks';
import Image from 'next/image';
import Logo from '@/assets/Logo.png';
import dron from '@/assets/drone_6316693.png';
import style from './footer.module.css';

const Footer = () => {
  const droneRef = useRef<HTMLImageElement | null>(null);

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
        <div className={style.logoContainer}>
          <Link href="/" aria-label="Main page">
            <div className={style.footerLogo}>
              <div className={style.containerLogo}>
                <Image src={Logo} alt="Logo icon" priority={true} />
              </div>
            </div>
          </Link>
        </div>
        <ul className={style.navLinks}>
          {headerNavLinks.map((link) => (
            <li>
              <Link key={link.title} href={link.href} className={style.navLink}>
                <span>{link.title}</span>
                <span className={style.spanLink}></span>
              </Link>
            </li>
          ))}
        </ul>
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
