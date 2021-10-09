import { useEffect, useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import { MobileDrawerContent } from './mobileDrawerContent/MobileDrawerContent';

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

  useEffect(() => {
    document.body.classList.remove('lockScreen');
  }, []);

  return (
    <>
      <button
        className="responsive_show:mobile mobileDrawer_button"
        onClick={handleOpen}
        aria-label={t('drawer_mobile_button_open')}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <MobileDrawerContent visible={visible} animated={animated} handleClose={handleClose} />
    </>
  );
};
