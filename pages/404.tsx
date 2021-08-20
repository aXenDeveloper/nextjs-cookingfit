import useTranslation from 'next-translate/useTranslation';
import { Breadcrumb } from '../components/Breadcrumb';
import { Layout } from '../components/layouts/Layout';
import { MessageBox } from '../components/MessageBox';

const Error404Page = () => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <Breadcrumb>{t('navigation_error')}</Breadcrumb>
      <MessageBox code="404">{t('error_404')}</MessageBox>
    </Layout>
  );
};

export default Error404Page;
