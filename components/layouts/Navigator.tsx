import Image from 'next/image';
import Link from 'next/link';

import ActionBar from './ActionBar';
import logo from '../../assets/logo/logo-dark.svg';

const Navigator = () => (
  <nav className="nav">
    <Link href="/">
      <a>
        <Image src={logo} alt="Logo CookingFit" />
      </a>
    </Link>
    <ActionBar />
  </nav>
);

export default Navigator;
