import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { faEllipsisH, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import { Menu } from './Menu';
import { Button } from '../Button';
import { apiURL } from '../../_utils/api';
const Popup = dynamic(() => import('../Popup'), { ssr: false });

export const ActionRecipeMenu = () => {
  const [visible, setVisible] = useState(false);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const { t } = useTranslation('global');
  const { asPath } = useRouter();

  return (
    <Menu
      title={<FontAwesomeIcon icon={faEllipsisH} />}
      visible={visible}
      setVisible={() => setVisible(!visible)}
    >
      <ul>
        <li>
          <Link href={`${asPath}/edit`}>
            <a>
              <div>
                <FontAwesomeIcon icon={faPencilAlt} />
              </div>
              <span>{t('action_edit')}</span>
            </a>
          </Link>
        </li>

        <li>
          <button
            onClick={() => {
              setVisible(false);
              setVisiblePopup(true);
            }}
            aria-label={t('action_delete')}
          >
            <div>
              <FontAwesomeIcon icon={faTrashAlt} />
            </div>
            <span>{t('action_delete')}</span>

            <Popup
              visible={visiblePopup}
              setVisible={setVisiblePopup}
              buttonText={t('action_delete')}
              cancalButton
              api={{
                url: `${apiURL}/recipes?page=1&limit=10`
              }}
            >
              test
            </Popup>
          </button>
        </li>
      </ul>
    </Menu>
  );
};
