import useTranslation from 'next-translate/useTranslation';
import { Breadcrumb } from '../components/Breadcrumb';
import { Container } from '../components/layouts/Container';
import { ShoppingAdd } from '../components/shopping/ShoppingAdd';

export const ShoppingView = () => {
  const { t } = useTranslation('global');

  return (
    <>
      <Breadcrumb>{t('navigation_shopping')}</Breadcrumb>
      <Container column>
        <main className="container_column:main">
          <h1>{t('navigation_shopping')}</h1>

          <div className="box padding">
            <ShoppingAdd />
          </div>

          <div className="box padding">fdh</div>
        </main>

        <aside className="container_column:aside">
          <div className="box padding">box padding</div>
        </aside>
      </Container>
    </>
  );
};
