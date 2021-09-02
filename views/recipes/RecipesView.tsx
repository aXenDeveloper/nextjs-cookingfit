import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Container } from '../../components/layouts/Container';
import { RecipesListItem } from '../../components/recipes/list/RecipesListItem';
import { RecipeModel } from '../../types/database/RecipesType';

interface Props {
  recipes: RecipeModel[];
}

export const RecipesView: FC<Props> = ({ recipes }) => {
  const { t } = useTranslation('global');

  return (
    <>
      <Breadcrumb>{t('navigation_recipes')}</Breadcrumb>
      <Container column>
        <main className="container_column:main">
          <div className="container_header">
            <h1>{t('navigation_recipes')}</h1>
          </div>

          <ul className="box padding recipes_list">
            {recipes.map(el => (
              <RecipesListItem key={el.id} recipe={el} />
            ))}
          </ul>
        </main>

        <aside className="container_column:aside">
          <div className="box padding">box padding</div>
        </aside>
      </Container>
    </>
  );
};
