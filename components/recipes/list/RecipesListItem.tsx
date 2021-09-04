import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RecipeModel } from '../../../types/database/RecipesType';
import useTranslation from 'next-translate/useTranslation';
import { Button } from '../../Button';

type Props = {
  recipe: RecipeModel;
};

export const RecipesListItem: FC<Props> = ({ recipe }) => {
  const { t } = useTranslation('global');

  return (
    <li className="recipes_list_item">
      <Link href="#">
        <a className="recipes_list_item_image">
          {recipe.image && <Image src={recipe.image} alt={recipe.title} layout="fill" />}
        </a>
      </Link>

      <div className="recipes_list_item_main">
        <div className="recipes_list_item_main_header">
          <Link href={`/recipes/${recipe.category_name}`}>
            <a>{t(`navigation_${recipe.category_name}`)}</a>
          </Link>

          <div>rate</div>
        </div>

        <div className="recipes_list_item_main_title">
          <h2>{recipe.title}</h2>

          <span>
            {t('by')}{' '}
            <Link href={`/profile/${recipe.member_name_seo}`}>
              <a>{recipe.member_name}</a>
            </Link>
          </span>
        </div>

        <div className="recipes_list_item_main_footer">
          <ul className="recipes_list_item_main_footer_left">
            <li>{recipe.difficulty}</li>
            <li>{recipe.publish_date}</li>
          </ul>

          <ul className="recipes_list_item_main_footer_right">
            <li>{recipe.difficulty}</li>
            <li>
              <Button href="#" type="link" color="light">
                {t('read_more')}
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};
