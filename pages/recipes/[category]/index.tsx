import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { Layout } from '../../../components/layouts/Layout';

const RecipesCategoryPage = () => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <NextSeo title={t('title_seo_page', { title: t('navigation_recipes') })} />
      test
    </Layout>
  );
};

export default RecipesCategoryPage;
