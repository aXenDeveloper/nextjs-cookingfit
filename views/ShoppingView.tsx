import useTranslation from 'next-translate/useTranslation';
import { useQuery } from 'react-query';
import { Breadcrumb } from '../components/Breadcrumb';
import { Container } from '../components/layouts/Container';
import { SpinnersLoading } from '../components/loading/SpinnersLoading';
import { MessageBox } from '../components/messageBox/MessageBox';
import { PermissionMessageBox } from '../components/messageBox/PermissionMessageBox';
import { ShoppingAdd } from '../components/shopping/ShoppingAdd';
import { useAuth } from '../context/useAuth';
import { ShoppingListModelAPI } from '../types/database/ShoppingType';
import { apiURL } from '../_utils/api';

export const ShoppingView = () => {
  const { t } = useTranslation('global');
  const { session, loading } = useAuth();

  const { isLoading, isError, data } = useQuery<ShoppingListModelAPI>([session], async () => {
    if (session?.user.id) {
      const res = await fetch(`${apiURL}/recipes/shopping?member_id=${session?.user.id}`);

      return await res.json();
    }
  });

  if (isLoading || loading) {
    return (
      <>
        <Breadcrumb>{t('navigation_shopping')}</Breadcrumb>

        <Container>
          <div className="text_center">
            <SpinnersLoading />
          </div>
        </Container>
      </>
    );
  }

  if (!session) {
    return (
      <>
        <Breadcrumb>{t('navigation_shopping')}</Breadcrumb>
        <PermissionMessageBox code="1R108/4" />
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Breadcrumb>{t('navigation_shopping')}</Breadcrumb>
        <MessageBox code="5R108/1" />
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

          <div className="box padding">
            <ul>
              {data?.results.map(el => (
                <li key={el.id}>{el.name}</li>
              ))}
            </ul>
          </div>
        </main>

        <aside className="container_column:aside">
          <div className="box padding">box padding</div>
        </aside>
      </Container>
    </>
  );
};
