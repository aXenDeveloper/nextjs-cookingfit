import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../assets/logo/logo-dark.svg';
import style from './Navigator.module.scss';

const Navigator = () => (
  <nav className={style.main}>
    <Link href='/'>
      <a>
        <Image src={logo} alt='Logo CookingFit' />
      </a>
    </Link>
  </nav>
);

export default Navigator;
