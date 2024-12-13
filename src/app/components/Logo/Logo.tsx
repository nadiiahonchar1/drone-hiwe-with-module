import Image from 'next/image';
import logo from '@/assets/Logo.png';

export default function Logo() {
  return <Image src={logo} alt="Логотип" priority width={300} height={69} />;
}
