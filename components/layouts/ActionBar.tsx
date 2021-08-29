import { useRouter } from 'next/dist/client/router';
import Cookies from 'js-cookie';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import flagUSA from '../../assets/flags/usa.svg';
import flagPL from '../../assets/flags/pl.svg';
import { useDarkTheme } from '../../context/useDarkTheme';

export const ActionBar = () => {
  const { asPath } = useRouter();
  const { setDarkTheme } = useDarkTheme();

  const handleChangeLang = (lang: string) => {
    Cookies.set('NEXT_LOCALE', lang, { expires: 365 });
  };

  const handleDarkButton = () => {
    if (!localStorage.getItem('cookingFit_dark')) {
      document.documentElement.setAttribute('theme', 'dark');
      localStorage.setItem('cookingFit_dark', '1');
      setDarkTheme(true);
    } else {
      document.documentElement.setAttribute('theme', '');
      localStorage.removeItem('cookingFit_dark');
      setDarkTheme(false);
    }

    localStorage.setItem('cookingFit_dark_manual', '1');
  };

  return (
    <ul className="action_bar">
      <li>
        <button onClick={handleDarkButton} className="action_bar:dark">
          <FontAwesomeIcon icon={faMoon} />
        </button>
      </li>

      <li>
        <Tippy content="English (USA)">
          <div>
            <Link href={asPath} locale={'en'} scroll={false}>
              <a onClick={() => handleChangeLang('en')}>
                <Image src={flagUSA} alt="English (USA)" unoptimized />
              </a>
            </Link>
          </div>
        </Tippy>
      </li>

      <li>
        <Tippy content="Polski (PL)">
          <div>
            <Link href={asPath} locale={'pl'} scroll={false}>
              <a onClick={() => handleChangeLang('pl')}>
                <Image src={flagPL} alt="Polski (PL)" unoptimized />
              </a>
            </Link>
          </div>
        </Tippy>
      </li>
    </ul>
  );
};
