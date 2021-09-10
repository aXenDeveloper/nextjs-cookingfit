import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { Editor } from '../../../components/Editor';
import { Container } from '../../../components/layouts/Container';
import { SpinnersLoading } from '../../../components/loading/SpinnersLoading';
import { PermissionMessageBox } from '../../../components/messageBox/PermissionMessageBox';
import { useAuth } from '../../../context/useAuth';

export const RecipeAddView = () => {
  const [textCKEditor, setTextCKEDitor] = useState('<p>Hello from CKEditor 5!</p>');
  const { session, loading } = useAuth();
  const { t } = useTranslation('global');

  if (loading) {
    return (
      <Container small>
        <div className="padding text_center">
          <SpinnersLoading />
        </div>
      </Container>
    );
  }

  if (!session) {
    return (
      <>
        <Breadcrumb>{t('navigation_recipes_add')}</Breadcrumb>
        <PermissionMessageBox code="XXX" />
      </>
    );
  }

  console.log(textCKEditor);

  return (
    <>
      <Breadcrumb>{t('navigation_recipes_add')}</Breadcrumb>
      <Container column form>
        <form>
          <main className="container_column:main">
            <div className="container_header">
              <h1>{t('navigation_recipes_add')}</h1>
            </div>

            <div className="box padding">
              <ul className="recipes_add">
                <li>
                  <Editor textCKEditor={textCKEditor} setTextCKEDitor={setTextCKEDitor} />
                </li>
              </ul>
            </div>
          </main>

          <aside className="container_column:aside">
            <div className="box padding">box padding</div>
          </aside>
        </form>
      </Container>
    </>
  );
};
