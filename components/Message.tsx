import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

type Props = {
  type: 'error' | 'warning' | 'success' | 'information';
};

export const Message: FC<Props> = ({ children, type }) => {
  return (
    <div className={`message message_${type}`}>
      <div className="message_icon">
        <FontAwesomeIcon icon={faTimes} />
      </div>

      <span>{children}</span>
    </div>
  );
};
