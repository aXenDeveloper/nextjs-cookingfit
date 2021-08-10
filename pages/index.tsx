import { Container } from '../components/layouts/Container';
import { Menu } from '../components/Menu';
import { signOut, useSession } from 'next-auth/client';
import Link from 'next/link';

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
            <Link href="/login">Sign in</Link>
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
