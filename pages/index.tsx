import { NextSeo } from 'next-seo';
import { signIn, signOut, useSession } from 'next-auth/client';
import useTranslation from 'next-translate/useTranslation';

import { Container } from '../components/layouts/Container';
import { Menu } from '../components/Menu';

const HomeView = () => {
  const { t } = useTranslation('global');
  const [session, loading] = useSession();

  return (
    <>
      <NextSeo title={t('title_seo')} description="A short description goes here." />

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
    </>
  );
};

export default HomeView;
