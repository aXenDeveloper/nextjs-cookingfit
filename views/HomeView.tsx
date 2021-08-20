import { signIn, signOut } from 'next-auth/client';
import { Container } from '../components/layouts/Container';
import { Menu } from '../components/Menu';
import { useAuth } from '../context/useAuth';

export const HomeView = () => {
  const { session, loading } = useAuth();

  return (
    <Container small>
      <Menu>
        <div>test</div>
      </Menu>

      <div>
        {!session && (
          <>
            Not signed in <br />
            <button onClick={() => signIn()}>signIn</button>
          </>
        )}
        {session && (
          <>
            Signed in as {session.user?.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </>
        )}
      </div>
    </Container>
  );
};
