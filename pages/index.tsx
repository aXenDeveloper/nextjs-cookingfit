import Container from '../components/layouts/Container';
import { Menu } from '../components/Menu';
import { signIn, signOut, useSession } from 'next-auth/client';

const HomeView = () => {
  const [session, loading] = useSession();

  return (
    <Container small>
      <Menu>
        <div>test</div>
      </Menu>

      <div>
        {!session && (
          <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
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

export default HomeView;
