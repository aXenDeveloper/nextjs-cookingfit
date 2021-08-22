import { useState } from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/client';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import { Menu } from './Menu';

export const UserMenu = () => {
  const { t } = useTranslation('usermenu');
  const [visible, setVisible] = useState(false);

  return (
    <Menu title="hello" visible={visible} setVisible={setVisible}>
      <ul className="userBar_menu">
        <li>
          <Link href="/">
            <a onClick={() => setVisible(false)}>
              <div>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <span>{t('profile')}</span>
            </a>
          </Link>
        </li>

        <li>
          <button
            onClick={() => {
              setVisible(false);
              signOut();
            }}
          >
            <div>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </div>
            <span>{t('sign_out')}</span>
          </button>
        </li>
      </ul>
    </Menu>
  );
};
