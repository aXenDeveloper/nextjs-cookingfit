import { FC } from 'react';
import style from './layout.module.scss';

import Header from '../header/Header';
import Navigator from '../navigator/Navigator';

const Layout: FC = ({ children }) => (
  <>
    <Header />
    <Navigator />
    <main className={style.main}>{children}</main>
  </>
);

export default Layout;
