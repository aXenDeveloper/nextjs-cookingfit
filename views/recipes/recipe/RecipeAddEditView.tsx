import { FC, useEffect, useState } from 'react';
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
import { IngredientsProps, RecipeModel } from '../../../types/database/RecipesType';

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

interface Props {
  recipe?: RecipeModel;
}

export const RecipeAddEditView: FC<Props> = ({ recipe }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<FormValuesTypes>();
  const [textCKEditor, setTextCKEDitor] = useState(recipe?.text ?? '');
  const [error, setError] = useState(false);
  const [inputImage, setInputImage] = useState<File | null>();
  const [preview, setPreview] = useState(recipe?.image ?? '');
  const [ingredients, setIngredients] = useState<IngredientsProps[]>(
    recipe?.ingredients ? JSON.parse(recipe?.ingredients) : []
  );
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

      if (recipe) {
        formData.append('id', `${recipe.id}`);
      }

      if (inputImage) {
        formData.append('image', inputImage);
      } else {
        formData.append('image_URL', preview);
      }

      setError(false);

      const res = await fetch(recipe ? '/api/recipe/edit' : '/api/recipe/add', {
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
        author_id: recipe?.member_id ?? session?.user.id,
        difficulty: +data.recipe_difficulty,
        calories: +data.recipe_calories,
        proteins: +data.recipe_proteins,
        fats: +data.recipe_fats,
        carbohydrates: +data.recipe_carbohydrates,
        ingredients,
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

  if (session && session.user.id !== recipe?.member_id && session?.user.group_id !== 4) {
    return (
      <>
        <Breadcrumb>{t(recipe ? 'navigation_recipes_edit' : 'navigation_recipes_add')}</Breadcrumb>
        <PermissionMessageBox code="1C107/7" />
      </>
    );
  }

  if (!session) {
    return (
      <>
        <Breadcrumb>{t(recipe ? 'navigation_recipes_edit' : 'navigation_recipes_add')}</Breadcrumb>
        <PermissionMessageBox code="XXX" />
      </>
    );
  }

  return (
    <>
      <Breadcrumb>{t(recipe ? 'navigation_recipes_edit' : 'navigation_recipes_add')}</Breadcrumb>
      <Container column form>
        <form onSubmit={handleSubmit(onSubmit)} className="recipes_form">
          <main className="container_column:main">
            <div className="container_header">
              <h1>{t(recipe ? 'navigation_recipes_edit' : 'navigation_recipes_add')}</h1>
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
                    defaultValue={recipe?.title ?? ''}
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
                    preview={preview}
                    setPreview={setPreview}
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
                defaultValue={recipe?.category_id ?? 1}
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
                defaultValue={recipe?.time ?? 1}
              >
                {t('input_box_desc_recipe_time')}
              </TextInput>
            </div>

            <div className="box padding">
              <DifficultyRangeInput
                id="recipe_difficulty"
                register={register}
                min={1}
                max={3}
                defaultValue={recipe?.difficulty ?? 1}
              />
            </div>

            <div className="box padding">
              <NutritionalValuesEdit
                register={register}
                defaultValues={[
                  {
                    id: 'recipe_calories',
                    value: recipe?.calories ?? 0
                  },
                  {
                    id: 'recipe_fats',
                    value: recipe?.fats ?? 0
                  },
                  {
                    id: 'recipe_proteins',
                    value: recipe?.proteins ?? 0
                  },
                  {
                    id: 'recipe_carbohydrates',
                    value: recipe?.carbohydrates ?? 0
                  }
                ]}
              />
            </div>
          </aside>

          <div className="box padding container_form_submit">
            {isLoading && (
              <div className="text_center">
                <SpinnersLoading />
              </div>
            )}

            <ul>
              <li>
                <Button
                  type="button"
                  color="primary"
                  ariaLabel={t(recipe ? 'navigation_recipes_edit' : 'navigation_recipes_add')}
                  typeButton="submit"
                  disabled={isLoading}
                >
                  {t(recipe ? 'navigation_recipes_edit' : 'navigation_recipes_add')}
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
                  disabled={isLoading}
                >
                  {t('form_cancel')}
                </Button>
              </li>
            </ul>
          </div>
        </form>
      </Container>
    </>
  );
};
