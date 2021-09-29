import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { Layout } from '../../../../components/layouts/Layout';
import { RecipeModel } from '../../../../types/database/RecipesType';
import { RecipeAddEditView } from '../../../../views/recipes/recipe/RecipeAddEditView';
import { apiURL } from '../../../../_utils/api';

interface Props {
  recipe: RecipeModel;
}

const RecipesItemEditPage: FC<Props> = ({ recipe }) => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <NextSeo
        title={`${t('navigation_recipes_edit')} - ${recipe.title} - ${t('title_seo_page', {
          title: t('navigation_recipes')
        })}`}
      />

      <RecipeAddEditView recipe={recipe} />
    </Layout>
  );
};

export const getServerSideProps = async (context: any) => {
  const { category, url }: { category: string; url: string } = context.params;

  const currentIDfromArray = url.split('-');
  const currentID = currentIDfromArray[currentIDfromArray.length - 1];
  const currentURLformArray = currentIDfromArray.slice(0, currentIDfromArray.length - 1).join('-');

  const res = await fetch(
    `${apiURL}/recipes/item?category=${category}&id=${currentID}&url=${currentURLformArray}`
  );
  const body = await res.json();

  return {
    notFound: !body.result,
    props: {
      recipe: body.result ? body.result[0] : null
    }
  };
};

export default RecipesItemEditPage;
