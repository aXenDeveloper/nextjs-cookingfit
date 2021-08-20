import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { Layout } from '../components/layouts/Layout';
import { HomeView } from '../views/HomeView';

const HomePage = () => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <NextSeo title={t('title_seo')} description="A short description goes here." />
      <HomeView />
    </Layout>
  );
};

export default HomePage;
