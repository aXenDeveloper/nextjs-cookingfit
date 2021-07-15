import { FC } from 'react';

import Header from './Header';
import Navigator from './Navigator';

const Layout: FC = ({ children }) => (
  <>
    <Header />
    <Navigator />
    <main className="main">{children}</main>
  </>
);

export default Layout;
