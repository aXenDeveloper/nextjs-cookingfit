import { FC } from 'react';

interface Props {
  color: 'positive' | 'negative' | 'intermediary';
}

export const Badges: FC<Props> = ({ children, color }) => {
  return <div className={`badges badges_${color}`}>{children}</div>;
};
