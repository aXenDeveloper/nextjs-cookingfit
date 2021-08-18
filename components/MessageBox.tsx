import { FC } from 'react';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import useTranslation from 'next-translate/useTranslation';

import { Container } from './layouts/Container';

interface Props {
  code?: string;
  small?: boolean;
  icon?: IconProp;
  title?: string;
  titleShow?: boolean;
  description?: string;
  buttons?: JSX.Element;
}

export const MessageBox: FC<Props> = ({
  code,
  small,
  icon,
  title,
  titleShow = true,
  description,
  buttons,
  children
}) => {
  const { t } = useTranslation('global');

  return (
    <Container small={small}>
      <div className="box padding message_box">
        <FontAwesomeIcon icon={icon ? icon : faExclamationCircle} />

        {titleShow && <p>{title ? title : t('error_title')}</p>}

        <div>{children ? children : t('error_internel')}</div>

        <p>
          {description ? (
            description
          ) : (
            <>
              {t('error_code')}: <span className="text:bold">{code}</span>
            </>
          )}
        </p>

        {buttons && (
          <>
            <hr className="hr" />

            {buttons}
          </>
        )}
      </div>
    </Container>
  );
};
