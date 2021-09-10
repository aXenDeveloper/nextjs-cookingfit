import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { Badges } from './Badges';

interface Props {
  difficulty: number;
}

export const DifficultyBadges: FC<Props> = ({ difficulty }) => {
  const { t } = useTranslation('global');

  if (difficulty === 3) {
    return <Badges color="negative">{t('hard')}</Badges>;
  }

  if (difficulty === 2) {
    return <Badges color="intermediary">{t('medium')}</Badges>;
  }

  return <Badges color="positive">{t('easy')}</Badges>;
};
