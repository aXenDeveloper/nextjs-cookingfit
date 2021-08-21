import { signOut } from 'next-auth/client';
import { Button } from '../../Button';

export const UserBarAuth = () => {
  return (
    <ul className="userBar responsive_show:desktop">
      <li>
        <Button type="button" onClick={() => signOut()} color="primary">
          Sign out
        </Button>
      </li>
    </ul>
  );
};
