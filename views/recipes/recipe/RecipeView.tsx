import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { Container } from '../../../components/layouts/Container';
import { IngredientsProps, RecipeModel } from '../../../types/database/RecipesType';
import { ActionRecipeMenu } from '../../../components/menu/ActionRecipeMenu';
import { DifficultyBadges } from '../../../components/badges/DifficultyBadges';
import { NutritionalValues } from '../../../components/recipes/nutritionalValues/NutritionalValues';
import { Ingredients } from '../../../components/recipes/ingredients/Ingredients';

interface Props {
  recipe: RecipeModel;
}

export const RecipeView: FC<Props> = ({ recipe }) => {
  const { t } = useTranslation('global');

  const ingridients: IngredientsProps[] = recipe.ingredients
    ? JSON.parse(recipe.ingredients)
    : null;

  const urls = {
    category: `/recipes/${recipe.category_name}`,
    author: `/profile/${recipe.member_name_seo}`
  };

  return (
    <>
      <Breadcrumb>{recipe.title}</Breadcrumb>
      <Container column>
        <main className="container_column:main recipes_item">
          <div className="recipes_item_header">
            <div className="recipes_item_header:image">
              {recipe.image && (
                <Image src={recipe.image} alt={recipe.title} objectFit="cover" layout="fill" />
              )}
            </div>

            <div className="recipes_item_header_content box padding">
              <div className="recipes_item_header_content_top">
                <div>
                  <Link href={urls.category}>
                    <a>{t(`navigation_${recipe.category_name}`)}</a>
                  </Link>

                  <h1>{recipe.title}</h1>

                  <span>
                    {t('by')}{' '}
                    <Link href={urls.author}>
                      <a>{recipe.member_name}</a>
                    </Link>
                  </span>
                </div>

                <div>
                  <ActionRecipeMenu />
                </div>
              </div>

              <hr className="hr" />

              <div className="recipes_item_header_content_bottom">
                <div>
                  <DifficultyBadges difficulty={recipe.difficulty} />
                </div>

                <div>{recipe.time}</div>
              </div>
            </div>
          </div>

          {ingridients && (
            <Ingredients ingridientsList={ingridients} serveCount={recipe.serve_count} />
          )}

          <div className="box padding recipes_item_text">
            <div dangerouslySetInnerHTML={{ __html: recipe.text }} />
          </div>
        </main>

        <aside className="container_column:aside">
          <NutritionalValues
            data={{
              calories: recipe.calories,
              proteins: recipe.proteins,
              fats: recipe.fats,
              carbohydrates: recipe.carbohydrates
            }}
          />
        </aside>
      </Container>
    </>
  );
};
