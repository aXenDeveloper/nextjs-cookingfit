import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { Layout } from '../../components/layouts/Layout';
import { RecipeAddEditView } from '../../views/recipes/recipe/RecipeAddEditView';

const RecipeAddPage = () => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <NextSeo title={t('title_seo_page', { title: t('navigation_recipes_add') })} />
      <RecipeAddEditView />
    </Layout>
  );
};

export default RecipeAddPage;
