import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import useTranslation from 'next-translate/useTranslation';
import { useDarkTheme } from '../../../context/useDarkTheme';

export const ChangeDark = () => {
  const { setDarkTheme } = useDarkTheme();
  const { t } = useTranslation('global');

  const handleDarkButton = () => {
    if (!localStorage.getItem('cookingFit_dark')) {
      document.documentElement.setAttribute('theme', 'dark');
      localStorage.setItem('cookingFit_dark', '1');
      setDarkTheme(true);
    } else {
      document.documentElement.setAttribute('theme', '');
      localStorage.removeItem('cookingFit_dark');
      setDarkTheme(false);
    }

    localStorage.setItem('cookingFit_dark_manual', '1');
  };

  return (
    <Tippy content={t('tooltip_dark')}>
      <button onClick={handleDarkButton} className="userBar:dark" aria-label={t('tooltip_dark')}>
        <FontAwesomeIcon icon={faMoon} />
      </button>
    </Tippy>
  );
};
