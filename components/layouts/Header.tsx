import Image from 'next/image';
import Link from 'next/link';

import { ActionBar } from './ActionBar';
import logo from '../../assets/logo/logo-dark.svg';

const Header = () => (
  <header className='header'>
    <Link href='/'>
      <a>
        <Image src={logo} alt='Logo CookingFit' />
      </a>
    </Link>
    <ActionBar />
  </header>
);

export default Header;
