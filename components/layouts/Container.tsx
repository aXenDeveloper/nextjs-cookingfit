import { FC } from 'react';

interface Props {
  small?: boolean;
}

export const Container: FC<Props> = ({ children, small }) => (
  <div className={`container${small ? ' container:small' : ''}`}>{children}</div>
);
