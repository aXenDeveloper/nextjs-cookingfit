import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { Button } from '../../../components/Button';
import { Editor } from '../../../components/Editor';
import { FileInput } from '../../../components/inputs/FileInput';
import { TextInput } from '../../../components/inputs/TextInput';
import { Container } from '../../../components/layouts/Container';
import { SpinnersLoading } from '../../../components/loading/SpinnersLoading';
import { PermissionMessageBox } from '../../../components/messageBox/PermissionMessageBox';
import { useAuth } from '../../../context/useAuth';
import { FormValuesTypes } from '../../../types/FormValuesTypes';

export const RecipeAddView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValuesTypes>();
  const [textCKEditor, setTextCKEDitor] = useState('<p>Hello from CKEditor 5!</p>');
  const { session, loading } = useAuth();
  const { t } = useTranslation('global');

  const onSubmit: SubmitHandler<FormValuesTypes> = data => {
    console.log(data);
  };

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

  return (
    <>
      <Breadcrumb>{t('navigation_recipes_add')}</Breadcrumb>
      <Container column form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <main className="container_column:main">
            <div className="container_header">
              <h1>{t('navigation_recipes_add')}</h1>
            </div>

            <div className="box padding">
              <ul className="recipes_add">
                <li>
                  <TextInput
                    id="recipe_title"
                    register={register}
                    error={!!errors.recipe_title}
                    required={{
                      required: true,
                      showTextRequired: true
                    }}
                    labelOutsideInput
                  />
                </li>

                <li>
                  <FileInput id="recipe_file" register={register} />
                </li>

                <li>
                  <Editor textCKEditor={textCKEditor} setTextCKEDitor={setTextCKEDitor} />
                </li>
              </ul>

              <hr className="hr" />

              <div className="text_center">
                <Button
                  type="button"
                  color="primary"
                  ariaLabel={t('form_recipe_add_submit')}
                  typeButton="submit"
                >
                  {t('form_recipe_add_submit')}
                </Button>
              </div>
            </div>
          </main>

          <aside className="container_column:aside">
            <div className="box padding">
              <TextInput
                id="recipe_time"
                type="number"
                register={register}
                error={!!errors.recipe_time}
                required={{
                  required: true,
                  showTextRequired: true
                }}
                labelOutsideInput
                min={1}
                max={10080}
              >
                {t('input_text_desc_recipe_time')}
              </TextInput>
            </div>
          </aside>
        </form>
      </Container>
    </>
  );
};
