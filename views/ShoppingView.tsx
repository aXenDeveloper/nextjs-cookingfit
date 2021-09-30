import useTranslation from 'next-translate/useTranslation';
import { Breadcrumb } from '../components/Breadcrumb';
import { Container } from '../components/layouts/Container';
import { PermissionMessageBox } from '../components/messageBox/PermissionMessageBox';
import { ShoppingAdd } from '../components/shopping/ShoppingAdd';
import { useAuth } from '../context/useAuth';

export const ShoppingView = () => {
  const { t } = useTranslation('global');
  const { session } = useAuth();

  if (!session) {
    return (
      <>
        <Breadcrumb>{t('navigation_shopping')}</Breadcrumb>
        <PermissionMessageBox code="1R108/1" />
      </>
    );
  }

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
