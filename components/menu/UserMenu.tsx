import { useState } from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/client';
import { faCaretDown, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import { Menu } from './Menu';
import { useAuth } from '../../context/useAuth';

export const UserMenu = () => {
  const { t } = useTranslation('usermenu');
  const { session } = useAuth();
  const [visible, setVisible] = useState(false);

  return (
    <Menu
      title={
        <>
          <span>{session?.user?.email}</span> <FontAwesomeIcon icon={faCaretDown} />
        </>
      }
      visible={visible}
      setVisible={setVisible}
      className="userBar_menu"
    >
      <ul className="userBar_menu_list">
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
