import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';

import { Button } from '../../../Button';

export const UserBarLogin = () => {
  const { t } = useTranslation('global');

  return (
    <ul className="userBar">
      <li>
        <button className="link">
          {t('userbar_button_login')} <FontAwesomeIcon icon={faCaretDown} />
        </button>
      </li>
      <li>
        <Button type="link" href="/register" color="primary">
          {t('userbar_button_register')}
        </Button>
      </li>
    </ul>
  );
};
