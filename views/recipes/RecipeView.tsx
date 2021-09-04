import { FC } from 'react';
import { RecipeModel } from '../../types/database/RecipesType';

type Props = {
  recipe: RecipeModel;
};

export const RecipeView: FC<Props> = ({ recipe }) => {
  console.log(recipe);

  return <div>{recipe.title}</div>;
};
