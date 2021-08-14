import { FC } from 'react';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';

import { Container } from './layouts/Container';

interface Props {
  code: string;
}

export const Error: FC<Props> = ({ code, children }) => {
  const { t } = useTranslation('global');

  return (
    <Container>
      <div className="box padding error">
        <FontAwesomeIcon icon={faExclamationCircle} />

        <p>{t('error_title')}</p>

        <div>{children ? children : t('error_internel')}</div>

        <p>
          {t('error_code')}: <span className="text:bold">{code}</span>
        </p>
      </div>
    </Container>
  );
};
