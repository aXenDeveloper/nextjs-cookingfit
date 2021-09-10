import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { Container } from '../../../components/layouts/Container';
import { RecipeModel } from '../../../types/database/RecipesType';
import { ActionRecipeMenu } from '../../../components/menu/ActionRecipeMenu';
import { DifficultyBadges } from '../../../components/badges/DifficultyBadges';

interface Props {
  recipe: RecipeModel;
}

export const RecipeView: FC<Props> = ({ recipe }) => {
  const { t } = useTranslation('global');

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

          <div className="box padding">
            <div dangerouslySetInnerHTML={{ __html: recipe.text }} />
          </div>
        </main>

        <aside className="container_column:aside">
          <div className="box padding">box padding</div>
        </aside>
      </Container>
    </>
  );
};
