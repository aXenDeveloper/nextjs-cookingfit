import useTranslation from 'next-translate/useTranslation';
import { useQuery } from 'react-query';
import { Breadcrumb } from '../components/Breadcrumb';
import { Container } from '../components/layouts/Container';
import { SpinnersLoading } from '../components/loading/SpinnersLoading';
import { MessageBox } from '../components/messageBox/MessageBox';
import { PermissionMessageBox } from '../components/messageBox/PermissionMessageBox';
import { ShoppingAdd } from '../components/shopping/ShoppingAdd';
import { useAuth } from '../context/useAuth';
import { ShopingListPropsArray, ShoppingListModelAPI } from '../types/database/ShoppingType';
import { apiURL } from '../_utils/api';
import { ShoppingList } from '../components/shopping/list/ShoppingList';
import { useEffect, useState } from 'react';

export const ShoppingView = () => {
  const [currentList, setCurrentList] = useState<ShopingListPropsArray[]>([]);
  const { t } = useTranslation('global');
  const { session, loading } = useAuth();

  const { isLoading, isError, data, refetch, isSuccess } = useQuery<ShoppingListModelAPI>(
    [session],
    async () => {
      if (session?.user.id) {
        const res = await fetch(`${apiURL}/recipes/shopping?member_id=${session?.user.id}`);

        return await res.json();
      }
    }
  );

  useEffect(() => {
    if (data?.results.list) {
      setCurrentList(JSON.parse(data?.results.list ?? '') as ShopingListPropsArray[]);
    }
  }, [data?.results.list]);

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
            <ShoppingAdd refetch={refetch} list={currentList} setList={setCurrentList} />
          </div>

          <div className="box padding">
            {currentList.length > 0 ? (
              <ShoppingList list={currentList} setList={setCurrentList} />
            ) : (
              <div className="text_center">{t('shopping_nofound')}</div>
            )}
          </div>
        </main>

        <aside className="container_column:aside">
          <div className="box padding">box padding</div>
        </aside>
      </Container>
    </>
  );
};
