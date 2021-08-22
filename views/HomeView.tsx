import { Container } from '../components/layouts/Container';
import { UserMenu } from '../components/menu/UserMenu';
import { useAuth } from '../context/useAuth';

export const HomeView = () => {
  const { session, loading } = useAuth();

  return (
    <Container small>
      <UserMenu />

      <div>{session ? <>Signed in as {session.user?.email}</> : <>Not signed in</>}</div>
    </Container>
  );
};
