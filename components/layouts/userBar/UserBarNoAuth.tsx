import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { Button } from '../../Button';

export const UserBarNoAuth = () => {
  const { t } = useTranslation('global');

  return (
    <>
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
    </>
  );
};
