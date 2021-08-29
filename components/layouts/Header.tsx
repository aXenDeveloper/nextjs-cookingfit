import Image from 'next/image';
import Link from 'next/link';
import { ActionBar } from './ActionBar';
import { NavigationRecipes } from './navigation/recipes/NavigationRecipes';
import { useDarkTheme } from '../../context/useDarkTheme';
import logoDark from '../../assets/logo/logo-dark.svg';
import logoLight from '../../assets/logo/logo-light.svg';

export const Header = () => {
  const { getDarkTheme } = useDarkTheme();

  return (
    <header className="header">
      <Link href="/">
        <a>
          <Image src={getDarkTheme ? logoLight : logoDark} alt="Logo CookingFit" />
        </a>
      </Link>

      <NavigationRecipes />
      <ActionBar />
    </header>
  );
};
