import { NavigationBottom } from './NavigationBottom';
import { NavigationMenu } from './NavigationMenu';
import { UserBar } from './userBar/UserBar';

const Navigation = () => (
  <nav className="nav">
    <NavigationMenu />
    <UserBar />

    <NavigationBottom />
  </nav>
);

export default Navigation;
