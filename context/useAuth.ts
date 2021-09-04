import { createContext, useContext } from 'react';
import { Session } from 'next-auth';

type AuthContextProps = {
  session: Session | null;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextProps>({
  session: null,
  loading: true
});

export const useAuth = () => useContext(AuthContext);
