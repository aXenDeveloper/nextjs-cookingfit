import { FC } from 'react';
import { IngredientsProps } from '../../../types/database/RecipesType';

interface Props {
  ingridientsList: IngredientsProps[];
}

export const Ingredients: FC<Props> = ({ ingridientsList }) => {
  return (
    <div className="box padding recipes_ingredients_view">{ingridientsList.map(el => el.name)}</div>
  );
};
