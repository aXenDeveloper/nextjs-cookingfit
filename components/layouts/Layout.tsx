import { FC } from 'react';

import Header from './navigation/Navigation';
import Navigator from './Header';

const Layout: FC = ({ children }) => (
  <>
    <Header />
    <Navigator />
    <main className="main">{children}</main>
  </>
);

export default Layout;
