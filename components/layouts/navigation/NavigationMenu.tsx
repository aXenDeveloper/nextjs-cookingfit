import { useRouter } from 'next/router';
import { navigationMenuList } from '../../../_utils/navigationMenuList';
import { NavigationMenuItem } from './NavigationMenuItem';

export const NavigationMenu = () => {
  const { asPath } = useRouter();
  const currentPath = `/${asPath.split('/')[1].split('?')[0]}`;

  return (
    <ul className="navigation navigation_menu responsive_show:desktop">
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
