import { FC, useEffect, useState } from 'react';
import { useSession } from 'next-auth/client';
import { Navigation } from './navigation/Navigation';
import { Header } from './Header';
import { AuthContext } from '../../context/useAuth';
import { DarkThemeContext } from '../../context/useDarkTheme';
import { Footer } from './Footer';

export const Layout: FC = ({ children }) => {
  const [session, loading] = useSession();
  const [getDarkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const checkDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    setDarkTheme(
      localStorage.getItem('cookingFit_dark')
        ? true
        : false || (checkDark && !localStorage.getItem('cookingFit_dark_manual'))
    );
  }, [getDarkTheme]);

  return (
    <DarkThemeContext.Provider value={{ getDarkTheme, setDarkTheme }}>
      <AuthContext.Provider value={{ session, loading }}>
        <Header />
        <Navigation />
        <div className="main">{children}</div>
        <Footer />
      </AuthContext.Provider>
    </DarkThemeContext.Provider>
  );
};
