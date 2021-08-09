import { useRouter } from 'next/dist/client/router';
import { navigationMenuList } from '../../../_utils/navigationMenuList';
import { NavigationMenuItem } from './NavigationMenuItem';

export const NavigationMenu = () => {
  const { pathname } = useRouter();
  const currentPath = `/${pathname.split('/')[1].split('?')[0]}`;

  return (
    <ul className="navigation navigation_menu">
      {navigationMenuList.map(({ id, title, path, icon }) => (
        <NavigationMenuItem
          key={id}
          title={title}
          path={path}
          icon={icon}
          active={currentPath === path}
        />
      ))}
    </ul>
  );
};
