'use client';
import Link from '../Link';
import headerNavLinks from '../../data/headerNavLinks';
import Image from 'next/image';
import Logo from '@/assets/Logo.png';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
// import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
// import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone';
import style from './header.module.css';
import { useAuth } from '@/app/store/AuthContext';
const Header = () => {
  const { token } = useAuth();

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logoContainer}>
          <Link href="/" aria-label="Main page">
            <div className={style.headerLogo}>
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
          {token && (
            <ul>
              <li>
                <Link href="/admin" className={style.navLink}>
                  <span>admin</span>
                  <span className={style.spanLink}></span>
                </Link>
              </li>
              <li>
                <Link href="/admin/forms" className={style.navLink}>
                  <span>forms</span>
                  <span className={style.spanLink}></span>
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className={style.cartBox}>
          <Link href="/cart" aria-label="Cart">
            <ShoppingBasketOutlinedIcon sx={{ color: '#fff', fontSize: 40 }} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
