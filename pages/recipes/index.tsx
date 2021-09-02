import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { Layout } from '../../components/layouts/Layout';
import { RecipesView } from '../../views/recipes/RecipesView';

const RecipesPage = () => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <NextSeo title={t('title_seo_page', { title: t('navigation_recipes') })} />
      <RecipesView />
    </Layout>
  );
};

export default RecipesPage;
