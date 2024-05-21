import Link from '../Link';
import headerNavLinks from '../../data/headerNavLinks';
import Image from 'next/image';
import Logo from '@/assets/Logo.png';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
const Header = () => {
  return (
    <header>
      <div>
        <div>
          <Link href="/" aria-label="Main page">
            <div>
              <div>
                <Image src={Logo} alt="Logo icon" priority={true} />
              </div>
            </div>
          </Link>
        </div>
        <div>
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              <span>{link.title}</span>
              <span></span>
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
