import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RecipesModel } from '../../../types/database/RecipesType';
import useTranslation from 'next-translate/useTranslation';
import { Button } from '../../Button';

type Props = {
  recipe: RecipesModel;
};

export const RecipesListItem: FC<Props> = ({ recipe }) => {
  const { t } = useTranslation('global');

  const urls = {
    category: `/recipes/${recipe.category_name}`,
    recipe: `/recipes/${recipe.category_name}/${recipe.url}`,
    author: `/profile/${recipe.member_name_seo}`
  };

  return (
    <li className="recipes_list_item">
      <Link href={urls.recipe}>
        <a className="recipes_list_item_image">
          {recipe.image && <Image src={recipe.image} alt={recipe.title} layout="fill" />}
        </a>
      </Link>

      <div className="recipes_list_item_main">
        <div className="recipes_list_item_main_header">
          <Link href={urls.category}>
            <a>{t(`navigation_${recipe.category_name}`)}</a>
          </Link>

          <div>rate</div>
        </div>

        <div className="recipes_list_item_main_title">
          <h2>{recipe.title}</h2>

          <span>
            {t('by')}{' '}
            <Link href={urls.author}>
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
              <Button href={urls.recipe} type="link" color="light" ariaLabel={t('read_more')}>
                {t('read_more')}
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};
