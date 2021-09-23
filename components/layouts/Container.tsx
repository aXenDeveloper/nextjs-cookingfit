import { FC } from 'react';

interface Props {
  small?: boolean;
  column?: boolean;
  form?: boolean;
}

export const Container: FC<Props> = ({ children, small, column, form }) => (
  <div
    className={`container${small ? ' container:small' : ''}${column ? ' container_column' : ''}${
      form ? ' container_form' : ''
    }`}
  >
    {children}
  </div>
);
