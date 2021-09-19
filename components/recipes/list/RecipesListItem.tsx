import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RecipesModel } from '../../../types/database/RecipesType';
import useTranslation from 'next-translate/useTranslation';
import { Button } from '../../Button';
import { DifficultyBadges } from '../../badges/DifficultyBadges';

interface Props {
  recipe: RecipesModel;
}

export const RecipesListItem: FC<Props> = ({ recipe }) => {
  const [renderedImage, setRenderedImage] = useState(false);
  const { t } = useTranslation('global');

  useEffect(() => {
    if (!recipe.image) {
      setRenderedImage(true);
    }
  }, [recipe.image]);

  const urls = {
    category: `/recipes/${recipe.category_name}`,
    recipe: `/recipes/${recipe.category_name}/${recipe.url}-${recipe.id}`,
    author: `/profile/${recipe.member_name_seo}`
  };

  return (
    <li className="recipes_list_item">
      <Link href={urls.recipe}>
        <a
          className={`recipes_list_item_image${
            !renderedImage ? ' recipes_list_item_image:loading' : ''
          }`}
        >
          {recipe.image && (
            <Image
              src={recipe.image}
              alt={recipe.title}
              layout="fill"
              onLoadingComplete={() => setRenderedImage(true)}
            />
          )}
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
            <li>
              <DifficultyBadges difficulty={recipe.difficulty} />
            </li>
            <li>{recipe.publish_date}</li>
          </ul>

          <ul className="recipes_list_item_main_footer_right">
            <li>{recipe.time}</li>
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
