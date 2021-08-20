import { useRouter } from 'next/dist/client/router';
import { navigationRecipesList } from '../../../../_utils/navigationRecipes/navigationRecipesList';
import { NavigationRecipesItem } from './NavigationRecipesItem';

export const NavigationRecipes = () => {
  const { pathname } = useRouter();
  const currentPath = `/${pathname.split('/')[1].split('?')[0]}`;

  return (
    <ul className="navigation navigation_recipes responsive_show:desktop">
      {navigationRecipesList.map(({ id, title, icon, path }) => (
        <NavigationRecipesItem
          key={id}
          title={title}
          icon={icon}
          path={path}
          active={currentPath === path}
        />
      ))}
    </ul>
  );
};
