import { FC } from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { Layout } from '../../components/layouts/Layout';
import { RecipeModel } from '../../types/database/RecipesType';
import { RecipesView } from '../../views/recipes/RecipesView';

interface Props {
  recipes: RecipeModel[];
}

const RecipesPage: FC<Props> = ({ recipes }) => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <NextSeo title={t('title_seo_page', { title: t('navigation_recipes') })} />
      <RecipesView recipes={recipes} />
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    `${
      process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : process.env.NEXTAUTH_URL
    }/api/recipes`
  );
  const data = await res.json();

  return {
    props: {
      recipes: data.results
    }
  };
}

export default RecipesPage;
