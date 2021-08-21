import { useAuth } from '../../../context/useAuth';
import { SpinnersLoading } from '../../loading/SpinnersLoading';
import { UserBarAuth } from './UserBarAuth';
import { UserBarNoAuth } from './UserBarNoAuth';

export const UserBar = () => {
  const { session, loading } = useAuth();

  if (loading) {
    return <SpinnersLoading small />;
  }

  if (session) {
    return <UserBarAuth />;
  }

  return <UserBarNoAuth />;
};
