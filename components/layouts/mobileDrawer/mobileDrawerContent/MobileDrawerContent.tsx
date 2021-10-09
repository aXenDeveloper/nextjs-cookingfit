import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { MobileDrawerContentHeader } from './MobileDrawerContentHeader';
import { MobileDrawerContentNav } from './MobileDrawerContentNav';

interface Props {
  visible: boolean;
  animated: boolean;
  handleClose: () => void;
}

export const MobileDrawerContent: FC<Props> = ({ visible, animated, handleClose }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={`mobileDrawer${animated ? ' mobileDrawer_fadeOut' : ''}`} onClick={handleClose}>
      <div
        className={`mobileDrawer_content${animated ? ' mobileDrawer_content_fadeOut' : ''}`}
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <button className="mobileDrawer_button:close" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <MobileDrawerContentHeader handleClose={handleClose} />
        <MobileDrawerContentNav handleClose={handleClose} />
      </div>
    </div>
  );
};
