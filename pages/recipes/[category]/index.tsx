import { GetStaticPaths } from 'next';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { Layout } from '../../../components/layouts/Layout';
import { RecipesView } from '../../../views/recipes/RecipesView';
import { navigationRecipesList } from '../../../_utils/navigationRecipes/navigationRecipesList';

interface Props {
  category: string;
}

const RecipesCategoryPage: FC<Props> = ({ category }) => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <NextSeo title={t('title_seo_page', { title: t('navigation_recipes') })} />
      <RecipesView category={category} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const pathsCategory = (lang: string) =>
    navigationRecipesList.map(el => {
      return {
        params: { category: el.title },
        locale: lang
      };
    });

  return {
    paths: [...pathsCategory('pl'), ...pathsCategory('en')],
    fallback: false
  };
};

interface GetStaticProps {
  params: {
    category: string;
  };
}

export const getStaticProps = async ({ params }: GetStaticProps) => {
  return {
    props: { category: params.category }
  };
};

export default RecipesCategoryPage;
