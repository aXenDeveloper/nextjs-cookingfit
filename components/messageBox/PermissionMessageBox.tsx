import { FC } from 'react';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import useTranslation from 'next-translate/useTranslation';
import { MessageBox } from './MessageBox';

interface Props {
  code: string;
}

export const PermissionMessageBox: FC<Props> = ({ code }) => {
  const { t } = useTranslation('global');

  return (
    <MessageBox icon={faLock} code={code}>
      {t('error_permission')}
    </MessageBox>
  );
};
