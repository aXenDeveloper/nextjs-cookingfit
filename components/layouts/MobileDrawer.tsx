import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';

export const MobileDrawer = () => {
  const [visible, setVisible] = useState(false);
  const [animated, setAnimated] = useState(false);
  const { t } = useTranslation('global');

  const handleOpen = () => {
    document.body.classList.add('lockScreen');
    setVisible(true);
  };

  const handleClose = () => {
    setAnimated(true);

    setTimeout(() => {
      document.body.classList.remove('lockScreen');
      setVisible(false);
      setAnimated(false);
    }, 200);
  };

  return (
    <>
      <button
        className="responsive_show:mobile mobileDrawer_button"
        onClick={handleOpen}
        aria-label={t('drawer_mobile_button_open')}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {visible && (
        <div
          className={`mobileDrawer${animated ? ' mobileDrawer_fadeOut' : ''}`}
          onClick={handleClose}
        >
          <div
            className={`mobileDrawer_content${animated ? ' mobileDrawer_content_fadeOut' : ''}`}
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            test
          </div>
        </div>
      )}
    </>
  );
};
