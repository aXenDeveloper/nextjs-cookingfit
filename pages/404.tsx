import useTranslation from 'next-translate/useTranslation';

import { Breadcrumb } from '../components/Breadcrumb';
import { Error } from '../components/Error';

const Error404Page = () => {
  const { t } = useTranslation('global');

  return (
    <>
      <Breadcrumb>{t('navigation_error')}</Breadcrumb>
      <Error code="404">{t('error_404')}</Error>
    </>
  );
};

export default Error404Page;
