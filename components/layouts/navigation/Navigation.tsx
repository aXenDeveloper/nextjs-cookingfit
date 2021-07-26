import { NavigationMenu } from './NavigationMenu';
import { UserBar } from './userBar/UserBar';

const Navigation = () => (
  <nav className="nav">
    <NavigationMenu />
    <UserBar />
  </nav>
);

export default Navigation;
