import { FC } from 'react';
import { Navigation } from './navigation/Navigation';
import { Header } from './Header';
import { AuthContext } from '../../context/useAuth';
import { useSession } from 'next-auth/client';

export const Layout: FC = ({ children }) => {
  const [session, loading] = useSession();

  return (
    <AuthContext.Provider value={{ session, loading }}>
      <Header />
      <Navigation />
      <main className="main">{children}</main>
    </AuthContext.Provider>
  );
};
