import { FC } from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { Layout } from '../../../components/layouts/Layout';
import { RecipeModel } from '../../../types/database/RecipesType';
import { RecipeView } from '../../../views/recipes/recipe/RecipeView';
import { apiURL } from '../../../_utils/api';

interface Props {
  recipe: RecipeModel;
}

const RecipesItemPage: FC<Props> = ({ recipe }) => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <NextSeo
        title={`${recipe.title} - ${t('title_seo_page', {
          title: t('navigation_recipes')
        })}`}
      />
      <RecipeView recipe={recipe} />
    </Layout>
  );
};

export const getServerSideProps = async (context: any) => {
  const { category, url }: { category: string; url: string } = context.params;

  const currentIDfromArray = url.split('-');
  const currentID = currentIDfromArray[currentIDfromArray.length - 1];

  const currentURLformArray = currentIDfromArray.slice(0, currentIDfromArray.length - 1).join('-');

  console.log(currentURLformArray);

  const res = await fetch(
    `${apiURL}/recipe?category=${category}&id=${currentID}&url=${currentURLformArray}`
  );
  const body = await res.json();

  return {
    notFound: !body.result,
    props: {
      recipe: body.result ? body.result[0] : null
    }
  };
};

export default RecipesItemPage;
