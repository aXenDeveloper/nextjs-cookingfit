import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { Breadcrumb } from '../components/Breadcrumb';
import { Layout } from '../components/layouts/Layout';
import { MessageBox } from '../components/MessageBox';

const Error404Page = () => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <NextSeo title={t('title_seo_page', { title: t('navigation_error') })} />
      <Breadcrumb>{t('navigation_error')}</Breadcrumb>
      <MessageBox code="404">{t('error_404')}</MessageBox>
    </Layout>
  );
};

export default Error404Page;
