import { FC, useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Container } from '../../components/layouts/Container';
import { SpinnersLoading } from '../../components/loading/SpinnersLoading';
import { MessageBox } from '../../components/messageBox/MessageBox';
import { RecipesListItem } from '../../components/recipes/list/RecipesListItem';
import { RecipesModelAPI } from '../../types/database/RecipesType';
import { apiURL } from '../../_utils/api';
import { Pagination } from '../../components/Pagination';
import { Button } from '../../components/Button';
import { useAuth } from '../../context/useAuth';

interface Props {
  defaultPage?: number;
  category?: string;
}

export const RecipesView: FC<Props> = ({ defaultPage = 1, category }) => {
  const { t } = useTranslation('global');
  const { query, push, asPath } = useRouter();
  const [page, setPage] = useState(defaultPage);
  const pathname = asPath.split('?')[0];
  const titleView = t(category ? `navigation_recipes_${category}` : 'navigation_recipes');
  const { session } = useAuth();

  useEffect(() => {
    setPage(query.page ? +query.page : defaultPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.page]);

  const { isLoading, isError, data, isFetching } = useQuery<RecipesModelAPI>(
    ['recipeList', page, category],
    async () => {
      const res = await fetch(
        `${apiURL}/recipes?page=${page}&limit=10${category ? `&category=${category}` : ''}`
      );

      return await res.json();
    },
    { keepPreviousData: true }
  );

  useEffect(() => {
    const maxPage = data?.page.max;

    if (query.page && maxPage && maxPage < +query.page) {
      setPage(maxPage);

      push(
        {
          pathname,
          query: { page: maxPage }
        },
        undefined,
        { shallow: true }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.page.max]);

  if (isError) {
    return (
      <>
        <Breadcrumb>{titleView}</Breadcrumb>
        <MessageBox code="5R101/1" />
      </>
    );
  }

  return (
    <>
      <Breadcrumb>{titleView}</Breadcrumb>
      <Container column>
        <main className="container_column:main">
          <div className="container_header">
            <h1>{titleView}</h1>
            {session && (
              <Button
                type="link"
                href="/recipes/add"
                color="primary"
                ariaLabel={t('navigation_recipes_add')}
              >
                {t('navigation_recipes_add')}
              </Button>
            )}
          </div>

          {isLoading ? (
            <div className="box padding text_center">
              <SpinnersLoading />
            </div>
          ) : (
            <ul className="box padding recipes_list">
              {data?.results.length ? (
                <>
                  <Pagination page={page} setPage={setPage} data={data.page} />

                  {data.results.map(el => (
                    <RecipesListItem key={el.id} recipe={el} />
                  ))}

                  <Pagination page={page} setPage={setPage} data={data.page} bottom />
                </>
              ) : (
                <div className="text_center">{t('recipes_no_found')}</div>
              )}
            </ul>
          )}
        </main>

        <aside className="container_column:aside">
          <div className="box padding recipes_filter">box padding</div>
        </aside>
      </Container>
    </>
  );
};
