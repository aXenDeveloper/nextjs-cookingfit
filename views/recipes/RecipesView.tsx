import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Container } from '../../components/layouts/Container';
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
          <div className="box padding">box padding</div>
        </main>

        <aside className="container_column:aside">
          <div className="box padding">box padding</div>
        </aside>
      </Container>
    </>
  );
};
