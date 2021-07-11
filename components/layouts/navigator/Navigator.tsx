import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../assets/logo/logo-dark.svg';
import ActionBar from '../actionBar/ActionBar';
import style from './Navigator.module.scss';

const Navigator = () => (
  <nav className={style.main}>
    <Link href='/'>
      <a>
        <Image src={logo} alt='Logo CookingFit' />
      </a>
    </Link>
    <ActionBar />
  </nav>
);

export default Navigator;
