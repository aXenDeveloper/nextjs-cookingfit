import { useRouter } from 'next/router';
import { navigationRecipesList } from '../../../../_utils/navigationRecipes/navigationRecipesList';
import { NavigationRecipesItem } from './NavigationRecipesItem';

export const NavigationRecipes = () => {
  const { asPath } = useRouter();

  const currentPath = () => {
    const pathMain = asPath.split('/')[1];
    const pathRecipe = asPath.split('/')[2];

    return `/${pathMain}/${pathRecipe}`;
  };

  return (
    <ul className="navigation navigation_recipes responsive_show:desktop">
      {navigationRecipesList.map(({ id, title, icon, path }) => (
        <NavigationRecipesItem
          key={id}
          title={title}
          icon={icon}
          path={path}
          active={currentPath() === path}
        />
      ))}
    </ul>
  );
};
