import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { Button } from '../../../Button';

export const UserBarLogin = () => {
  const { t } = useTranslation('global');

  return (
    <ul className="userBar">
      <li>
        <Link href="/login">
          <a className="link">{t('userbar_button_login')}</a>
        </Link>
      </li>

      <li>
        <Button type="link" href="/register" color="primary">
          {t('userbar_button_register')}
        </Button>
      </li>
    </ul>
  );
};
