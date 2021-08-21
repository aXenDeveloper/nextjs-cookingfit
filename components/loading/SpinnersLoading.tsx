import { FC } from 'react';

interface Props {
  small?: boolean;
}

export const SpinnersLoading: FC<Props> = ({ small }) => (
  <div className={`loading_spinners${small ? ' loading_spinners:small' : ''}`} role="status">
    <span className="loading:only">Loading...</span>
  </div>
);
