import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { faEllipsisH, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import { Menu } from './Menu';

export const ActionRecipeMenu = () => {
  const [visible, setVisible] = useState(false);
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
          <button aria-label={t('action_delete')}>
            <div>
              <FontAwesomeIcon icon={faTrashAlt} />
            </div>
            <span>{t('action_delete')}</span>
          </button>
        </li>
      </ul>
    </Menu>
  );
};
