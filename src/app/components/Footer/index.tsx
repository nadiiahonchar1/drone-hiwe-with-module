import Link from '../Link';
import headerNavLinks from '../../data/headerNavLinks';
import Image from 'next/image';
import Logo from '@/assets/Logo.png';
import style from './footer.module.css';
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.logoContainer}>
          <Link href="/" aria-label="Main page">
            <div className={style.footerLogo}>
              <div className={style.containerLogo}>
                <Image src={Logo} alt="Logo icon" priority={true} />
              </div>
            </div>
          </Link>
        </div>
        <div className={style.navLinks}>
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href} className={style.navLink}>
              <span>{link.title}</span>
              <span className={style.spanLink}></span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
