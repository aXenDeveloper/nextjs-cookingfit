import { ButtonLink } from '../components/buttons/ButtonLink';
import useTranslation from 'next-translate/useTranslation';

const HomeView = () => {
  const { t } = useTranslation('global');

  return (
    <div>
      <ButtonLink href="/test" type="important">
        {t('test')}
      </ButtonLink>
    </div>
  );
};

export default HomeView;
