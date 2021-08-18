import useTranslation from 'next-translate/useTranslation';

import { Breadcrumb } from '../components/Breadcrumb';
import { MessageBox } from '../components/MessageBox';

const Error404Page = () => {
  const { t } = useTranslation('global');

  return (
    <>
      <Breadcrumb>{t('navigation_error')}</Breadcrumb>
      <MessageBox code="404">{t('error_404')}</MessageBox>
    </>
  );
};

export default Error404Page;
