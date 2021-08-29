import { FC } from 'react';

interface Props {
  small?: boolean;
  column?: boolean;
}

export const Container: FC<Props> = ({ children, small, column }) => (
  <div
    className={`container${small ? ' container:small' : ''}${column ? ' container_column' : ''}`}
  >
    {children}
  </div>
);
