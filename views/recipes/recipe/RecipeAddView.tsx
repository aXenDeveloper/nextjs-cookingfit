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
import { SelectInput } from '../../../components/inputs/select/SelectInput';
import { TextInput } from '../../../components/inputs/TextInput';
import { Container } from '../../../components/layouts/Container';
import { SpinnersLoading } from '../../../components/loading/SpinnersLoading';
import { PermissionMessageBox } from '../../../components/messageBox/PermissionMessageBox';
import { useAuth } from '../../../context/useAuth';
import { FormValuesTypes } from '../../../types/FormValuesTypes';
import { navigationRecipesList } from '../../../_utils/navigationRecipes/navigationRecipesList';
import { NutritionalValuesEdit } from '../../../components/recipes/nutritionalValues/nutritionalValuesEdit/NutritionalValuesEdit';
import { IngredientsEdit } from '../../../components/recipes/ingredients/IngredientsEdit/IngredientsEdit';
import { IngredientsProps } from '../../../types/database/RecipesType';

interface RecipeAddProps {
  title: string;
  text: string;
  time: number;
  category_id: number;
  author_id: number;
  difficulty: number;
  calories: number;
  proteins: number;
  fats: number;
  carbohydrates: number;
  ingredients: IngredientsProps[];
  serveCount: number;
}

export const RecipeAddView = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<FormValuesTypes>({
    defaultValues: {
      recipe_difficulty: 1,
      recipe_calories: 0,
      recipe_fats: 0,
      recipe_proteins: 0,
      recipe_carbohydrates: 0
    }
  });
  const [textCKEditor, setTextCKEDitor] = useState('');
  const [error, setError] = useState(false);
  const [inputImage, setInputImage] = useState<File | null>();
  const [ingredients, setIngredients] = useState<IngredientsProps[]>([]);
  const [serveCount, setServeCount] = useState(1);
  const { session, loading } = useAuth();
  const { push } = useRouter();
  const { t } = useTranslation('global');

  const { mutateAsync, isLoading, isError } = useMutation(
    async ({
      title,
      text,
      time,
      category_id,
      author_id,
      difficulty,
      calories,
      proteins,
      fats,
      carbohydrates
    }: RecipeAddProps) => {
      const formData = new FormData();
      // @ts-ignore
      formData.append('image', inputImage);
      formData.append('title', title);
      formData.append('text', text);
      formData.append('time', `${time}`);
      formData.append('category_id', `${category_id}`);
      formData.append('author_id', `${author_id}`);
      formData.append('difficulty', `${difficulty}`);
      formData.append('calories', `${calories}`);
      formData.append('proteins', `${proteins}`);
      formData.append('fats', `${fats}`);
      formData.append('carbohydrates', `${carbohydrates}`);
      formData.append('ingredients', JSON.stringify(ingredients));
      formData.append('serveCount', `${serveCount}`);

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
    if (session?.user) {
      mutateAsync({
        title: data.recipe_title,
        text: textCKEditor,
        time: data.recipe_time,
        category_id: +data.recipe_category,
        author_id: session?.user.id,
        difficulty: +data.recipe_difficulty,
        calories: +data.recipe_calories,
        proteins: +data.recipe_proteins,
        fats: +data.recipe_fats,
        carbohydrates: +data.recipe_carbohydrates,
        ingredients: ingredients,
        serveCount
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
        <form onSubmit={handleSubmit(onSubmit)} className="recipes_form">
          <main className="container_column:main">
            <div className="container_header">
              <h1>{t('navigation_recipes_add')}</h1>
            </div>

            <div className="box padding">
              <ul className="recipes_form_list">
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
                  <FileInput
                    id="recipe_file"
                    register={register}
                    setValue={setValue}
                    file={inputImage}
                    setFile={setInputImage}
                  />
                </li>

                <li>
                  <IngredientsEdit
                    ingredients={ingredients}
                    setIngredients={setIngredients}
                    serveCount={serveCount}
                    setServeCount={setServeCount}
                  />
                </li>

                <li>
                  <Editor textCKEditor={textCKEditor} setTextCKEDitor={setTextCKEDitor} />
                </li>
              </ul>
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

            <div className="box padding">
              <NutritionalValuesEdit register={register} />
            </div>
          </aside>

          <ul className="box padding">
            <li>
              <Button
                type="button"
                color="primary"
                ariaLabel={t('form_recipe_add_submit')}
                typeButton="submit"
              >
                {t('form_recipe_add_submit')}
              </Button>
            </li>
            <li>
              <Button
                type="button"
                onClick={() => {
                  push('/recipes');
                }}
                color="light"
                ariaLabel={t('form_cancel')}
                typeButton="button"
              >
                {t('form_cancel')}
              </Button>
            </li>
          </ul>
        </form>
      </Container>
    </>
  );
};
