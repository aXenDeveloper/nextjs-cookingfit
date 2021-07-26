import { Button } from '../components/Button';
import useTranslation from 'next-translate/useTranslation';

const HomeView = () => {
  const { t } = useTranslation('global');

  return (
    <div>
      <Button type="link" href="/test" color="important">
        {t('test')}
      </Button>
    </div>
  );
};

export default HomeView;
