import { FC } from 'react';

import Header from './navigation/Navigation';
import Navigator from './Header';

const Layout: FC = ({ children }) => (
  <>
    <Navigator />
    <Header />
    <main className="main">{children}</main>
  </>
);

export default Layout;
