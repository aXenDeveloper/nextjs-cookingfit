import { Session } from 'next-auth';
import { createContext, useContext } from 'react';

interface AuthContextProps {
  session: Session | null;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  session: null,
  loading: true
});

export const useAuth = () => useContext(AuthContext);
