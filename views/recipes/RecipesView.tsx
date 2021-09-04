import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useQuery } from 'react-query';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Container } from '../../components/layouts/Container';
import { SpinnersLoading } from '../../components/loading/SpinnersLoading';
import { MessageBox } from '../../components/MessageBox';
import { RecipesListItem } from '../../components/recipes/list/RecipesListItem';
import { RecipesModelAPI } from '../../types/database/RecipesType';
import { apiURL } from '../../_utils/api';
import { useRouter } from 'next/dist/client/router';
import { Pagination } from '../../components/Pagination';

export const RecipesView = () => {
  const { t } = useTranslation('global');
  const { push } = useRouter();
  const [page, setPage] = useState(1);

  const { isLoading, isError, data, isPreviousData, isFetching } = useQuery<RecipesModelAPI>(
    ['recipeList', page],
    async () => {
      const res = await fetch(`${apiURL}/recipes?page=${page}`);

      return await res.json();
    },
    { keepPreviousData: true }
  );

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
              {data && (
                <>
                  <Pagination page={page} setPage={setPage} data={data.page} />

                  {data.results.map(el => (
                    <RecipesListItem key={el.id} recipe={el} />
                  ))}
                </>
              )}
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
