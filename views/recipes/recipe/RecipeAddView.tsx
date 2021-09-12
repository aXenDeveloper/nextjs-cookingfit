import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { Button } from '../../../components/Button';
import { Editor } from '../../../components/Editor';
import { FileInput } from '../../../components/inputs/FileInput';
import { DifficultyRangeInput } from '../../../components/inputs/DifficultyRangeInput';
import { SelectInput } from '../../../components/inputs/SelectInput';
import { TextInput } from '../../../components/inputs/TextInput';
import { Container } from '../../../components/layouts/Container';
import { SpinnersLoading } from '../../../components/loading/SpinnersLoading';
import { PermissionMessageBox } from '../../../components/messageBox/PermissionMessageBox';
import { useAuth } from '../../../context/useAuth';
import { FormValuesTypes } from '../../../types/FormValuesTypes';
import { navigationRecipesList } from '../../../_utils/navigationRecipes/navigationRecipesList';

interface RecipeAddProps {
  title: string;
  text: string;
  time: number;
  category_id: number;
  author_id: number;
  difficulty: number;
}

export const RecipeAddView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValuesTypes>({ defaultValues: { recipe_difficulty: 1 } });
  const [textCKEditor, setTextCKEDitor] = useState('');
  const [error, setError] = useState(false);
  const [inputImage, setInputImage] = useState({});
  const { session, loading } = useAuth();
  const { push } = useRouter();
  const { t } = useTranslation('global');

  const { mutateAsync, isLoading, isError } = useMutation(
    async ({ title, text, time, category_id, author_id, difficulty }: RecipeAddProps) => {
      const formData = new FormData();
      // @ts-ignore
      formData.append('image', inputImage);
      formData.append('title', title);
      formData.append('text', text);
      formData.append('time', `${time}`);
      formData.append('category_id', `${category_id}`);
      formData.append('author_id', `${author_id}`);
      formData.append('difficulty', `${difficulty}`);
      setError(false);

      const res = await fetch('/api/recipe/add', {
        method: 'POST',

        body: formData
      });

      if (res.status === 200) {
        const data = await res.json();
        push(`/recipes/${data.recordURL}`);

        return null;
      }

      setError(true);

      return null;
    }
  );

  const onSubmit: SubmitHandler<FormValuesTypes> = data => {
    setInputImage(data.recipe_file[0]);

    if (session?.user) {
      mutateAsync({
        title: data.recipe_title,
        text: textCKEditor,
        time: data.recipe_time,
        category_id: +data.recipe_category,
        author_id: session?.user.id,
        difficulty: +data.recipe_difficulty
      });
    }
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
              <SelectInput
                id="recipe_category"
                register={register}
                error={!!errors.recipe_category}
                required={{
                  required: true,
                  showTextRequired: false
                }}
                options={
                  <>
                    {navigationRecipesList.map(({ id, title }) => (
                      <option key={id} value={id}>
                        {t(`navigation_${title}`)}
                      </option>
                    ))}
                  </>
                }
              />
            </div>

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
                {t('input_box_desc_recipe_time')}
              </TextInput>
            </div>

            <div className="box padding">
              <DifficultyRangeInput id="recipe_difficulty" register={register} min={1} max={3} />
            </div>
          </aside>
        </form>
      </Container>
    </>
  );
};
