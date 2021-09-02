import useTranslation from 'next-translate/useTranslation';
import { useQuery } from 'react-query';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Container } from '../../components/layouts/Container';
import { SpinnersLoading } from '../../components/loading/SpinnersLoading';
import { MessageBox } from '../../components/MessageBox';
import { RecipesListItem } from '../../components/recipes/list/RecipesListItem';
import { RecipeModel } from '../../types/database/RecipesType';

export const RecipesView = () => {
  const { t } = useTranslation('global');

  const { isLoading, isError, data } = useQuery<RecipeModel[]>('recipeList', async () => {
    const res = await fetch(
      `${
        process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : process.env.NEXTAUTH_URL
      }/api/recipes`
    );
    const resData = await res.json();

    return resData.results;
  });

  if (isError) {
    return (
      <>
        <Breadcrumb>{t('navigation_recipes')}</Breadcrumb>
        <MessageBox code="5C103/1" />
      </>
    );
  }

  return (
    <>
      <Breadcrumb>{t('navigation_recipes')}</Breadcrumb>
      <Container column>
        <main className="container_column:main">
          <div className="container_header">
            <h1>{t('navigation_recipes')}</h1>
          </div>

          {isLoading ? (
            <div className="box padding text_center">
              <SpinnersLoading />
            </div>
          ) : (
            <ul className="box padding recipes_list">
              {data && data.map(el => <RecipesListItem key={el.id} recipe={el} />)}
            </ul>
          )}
        </main>

        <aside className="container_column:aside">
          <div className="box padding">box padding</div>
        </aside>
      </Container>
    </>
  );
};
