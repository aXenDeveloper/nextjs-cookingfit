import Image from 'next/image';
import Link from 'next/link';

import { ActionBar } from './ActionBar';
import logo from '../../assets/logo/logo-dark.svg';
import { NavigationRecipes } from './navigation/recipes/NavigationRecipes';

const Header = () => (
  <header className="header">
    <Link href="/">
      <a>
        <Image src={logo} alt="Logo CookingFit" />
      </a>
    </Link>

    <NavigationRecipes />
    <ActionBar />
  </header>
);

export default Header;
