import { NavigationBottom } from './NavigationBottom';
import { NavigationMenu } from './NavigationMenu';
import { UserBar } from '../userBar/UserBar';

export const Navigation = () => (
  <nav className="nav">
    <NavigationMenu />
    <UserBar />

    <NavigationBottom />
  </nav>
);
