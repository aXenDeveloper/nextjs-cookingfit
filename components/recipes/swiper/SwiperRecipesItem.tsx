import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { RecipesModel } from '../../../types/database/RecipesType';

interface Props {
  recipe: RecipesModel;
}

export const SwiperRecipesItem: FC<Props> = ({ recipe }) => {
  const [renderedImage, setRenderedImage] = useState(false);

  useEffect(() => {
    if (!recipe.image) {
      setRenderedImage(true);
    }

    return () => {
      setRenderedImage(false);
    };
  }, [recipe.image]);

  return (
    <div className="recipes_swiper_item">
      <div
        className={`recipes_swiper_item_image${
          !renderedImage ? ' recipes_swiper_item_image:loading' : ''
        }`}
      >
        {recipe.image && (
          <Image
            src={recipe.image}
            alt={recipe.title}
            objectFit="cover"
            layout="fill"
            onLoadingComplete={() => setRenderedImage(true)}
          />
        )}
      </div>
    </div>
  );
};
