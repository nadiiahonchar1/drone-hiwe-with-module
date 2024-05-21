import Link from '../Link';
import headerNavLinks from '../../data/headerNavLinks';
import Image from 'next/image';
import Logo from '@/assets/Logo.png';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import style from './header.module.css';
const Header = () => {
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
        </div>
        <div>
          <Link href="/cart" aria-label="Cart">
            <ShoppingBasketOutlinedIcon sx={{ color: 'white', fontSize: 40 }} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
