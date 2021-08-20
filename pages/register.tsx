import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import { RegisterView } from '../views/RegisterView';
import { Layout } from '../components/layouts/Layout';

export const RegisterPage = () => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <NextSeo title={t('title_seo_page', { title: t('navigation_register') })} />
      <RegisterView />
    </Layout>
  );
};

export default RegisterPage;
