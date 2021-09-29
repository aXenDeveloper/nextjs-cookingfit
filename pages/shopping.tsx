import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import { Layout } from '../components/layouts/Layout';
import { ShoppingView } from '../views/ShoppingView';

export const ShopingPage = () => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <NextSeo title={t('title_seo_page', { title: t('navigation_shopping') })} />
      <ShoppingView />
    </Layout>
  );
};

export default ShopingPage;
