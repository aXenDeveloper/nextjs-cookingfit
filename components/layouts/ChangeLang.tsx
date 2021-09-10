import { FC } from 'react';
import Tippy from '@tippyjs/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import Cookies from 'js-cookie';
import Image from 'next/image';
import flagUSA from '../../assets/flags/usa.svg';
import flagPL from '../../assets/flags/pl.svg';

interface Props {
  showMobile?: boolean;
}

export const ChangeLang: FC<Props> = ({ showMobile }) => {
  const { asPath } = useRouter();
  const { t } = useTranslation('global');

  const handleChangeLang = (lang: string) => {
    Cookies.set('NEXT_LOCALE', lang, { expires: 365 });
  };

  return (
    <ul
      className={`changeLang${showMobile ? ' responsive_show:mobile' : ' responsive_show:desktop'}`}
    >
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
