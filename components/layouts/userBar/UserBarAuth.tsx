import { UserMenu } from '../../menu/UserMenu';

export const UserBarAuth = () => {
  return (
    <ul className="userBar responsive_show:desktop">
      <li>
        <UserMenu />
      </li>
    </ul>
  );
};
