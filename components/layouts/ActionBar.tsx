import { useRouter } from 'next/dist/client/router';
import Cookies from 'js-cookie';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

import flagUSA from '../../assets/flags/usa.svg';
import flagPL from '../../assets/flags/pl.svg';

export const ActionBar = () => {
  const { asPath } = useRouter();

  const handleChangeLang = (lang: string) => {
    Cookies.set('NEXT_LOCALE', lang, { expires: 365 });
  };

  return (
    <ul className='action_bar'>
      <li>
        <button>
          <FontAwesomeIcon icon={faMoon} />
        </button>
      </li>

      <li>
        <Tippy content='English (USA)'>
          <div>
            <Link href={asPath} locale={'en'} scroll={false}>
              <a onClick={() => handleChangeLang('en')}>
                <Image src={flagUSA} alt='English (USA)' unoptimized />
              </a>
            </Link>
          </div>
        </Tippy>
      </li>

      <li>
        <Tippy content='Polski (PL)'>
          <div>
            <Link href={asPath} locale={'pl'} scroll={false}>
              <a onClick={() => handleChangeLang('pl')}>
                <Image src={flagPL} alt='Polski (PL)' unoptimized />
              </a>
            </Link>
          </div>
        </Tippy>
      </li>
    </ul>
  );
};
