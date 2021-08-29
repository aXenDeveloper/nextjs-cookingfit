import { createContext, useContext } from 'react';

interface DarkThemeProps {
  getDarkTheme: boolean;
  setDarkTheme: (val: boolean) => void;
}

const setDarkTheme = () => {};
export const DarkThemeContext = createContext<DarkThemeProps>({
  getDarkTheme: false,
  setDarkTheme
});

export const useDarkTheme = () => useContext(DarkThemeContext);
