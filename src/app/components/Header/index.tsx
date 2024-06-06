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
      <nav className={style.container}>
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
          <ul className={style.ulLinks}>
            {headerNavLinks.map((link) => (
              <li>
                <Link
                  key={link.title}
                  href={link.href}
                  className={style.navLink}
                >
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
        <div className={style.cartBox}>
          <Link href="/cart" aria-label="Cart">
            <ShoppingBasketOutlinedIcon sx={{ color: '#fff', fontSize: 40 }} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
