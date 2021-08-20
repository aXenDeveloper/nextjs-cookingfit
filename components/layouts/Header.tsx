import Image from 'next/image';
import Link from 'next/link';
import { ActionBar } from './ActionBar';
import { NavigationRecipes } from './navigation/recipes/NavigationRecipes';
import logo from '../../assets/logo/logo-dark.svg';

export const Header = () => (
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
