import { FC, useEffect, useState } from 'react';
import { Navigation } from './navigation/Navigation';
import { Header } from './Header';
import { AuthContext } from '../../context/useAuth';
import { useSession } from 'next-auth/client';
import { DarkThemeContext } from '../../context/useDarkTheme';

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
        <main className="main">{children}</main>
      </AuthContext.Provider>
    </DarkThemeContext.Provider>
  );
};
