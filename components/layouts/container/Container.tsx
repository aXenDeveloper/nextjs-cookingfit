import { FC } from 'react';
import style from './container.module.scss';

const Container: FC = ({ children }) => (
  <div className={style.main}>{children}</div>
);

export default Container;
