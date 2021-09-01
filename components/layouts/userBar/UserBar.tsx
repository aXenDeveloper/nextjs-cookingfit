import { useAuth } from '../../../context/useAuth';
import { ChangeDark } from './ChangeDark';
import { SpinnersLoading } from '../../loading/SpinnersLoading';
import { UserBarAuth } from './UserBarAuth';
import { UserBarNoAuth } from './UserBarNoAuth';

export const UserBar = () => {
  const { session, loading } = useAuth();

  if (loading) {
    return <SpinnersLoading small />;
  }

  return (
    <ul className="userBar responsive_show:desktop">
      {session ? <UserBarAuth /> : <UserBarNoAuth />}

      <li className="userBar:hr" />

      <li>
        <ChangeDark />
      </li>
    </ul>
  );
};
