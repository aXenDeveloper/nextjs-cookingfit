import useTranslation from 'next-translate/useTranslation';
import { FC, MouseEventHandler, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { Button } from '../../../Button';
import { IngredientsEditIterm } from './IngredientsEditIterm';
import { arrayMove } from '../../../../_utils/arrayMove';
import { IngredientsProps } from '../../../../types/database/RecipesType';
import { IngredientsServe } from '../IngredientsServe';

interface Props {
  ingredients: IngredientsProps[];
  setIngredients: (el: IngredientsProps[]) => void;
  serveCount: number;
  setServeCount: (el: number) => void;
}

export const IngredientsEdit: FC<Props> = ({
  ingredients,
  setIngredients,
  serveCount,
  setServeCount
}) => {
  const { t } = useTranslation('global');

  const [quantityInput, setQuantityInput] = useState(0);
  const [unitInput, setUnitInput] = useState('');
  const [nameInput, setNameInput] = useState('');

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();

    setIngredients([
      ...ingredients,
      {
        id: uuidv4(),
        quantity: quantityInput,
        unit: unitInput,
        name: nameInput
      }
    ]);

    setQuantityInput(0);
    setUnitInput('');
    setNameInput('');
  };

  const removeItem = (id: string) => {
    const filterIngredients = ingredients.filter(el => el.id !== id);

    setIngredients(filterIngredients);
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId && destination.index === source.index)
    ) {
      return;
    }

    setIngredients(arrayMove(ingredients, source.index, destination.index));
  };

  return (
    <div className="input input:labelOutside">
      <div className="input_box_content recipes_ingredients">
        <label>
          <span>{t('recipe_ingredients')}</span>

          <IngredientsServe serveCount={serveCount} setServeCount={setServeCount} />
        </label>

        {ingredients.length > 0 && (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="recipes_ingredients_list">
              {provided => (
                <ul
                  className="recipes_ingredients_list"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <>
                    {ingredients.map((el, index) => (
                      <IngredientsEditIterm
                        key={el.id}
                        ingredient={el}
                        removeItem={() => removeItem(el.id)}
                        serveCount={serveCount}
                        index={index}
                      />
                    ))}
                    {provided.placeholder}
                  </>
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        )}

        <ul className="recipes_ingredients_form">
          <li>
            <input
              name="recipe_ingredients_quantity"
              id="recipe_ingredients_quantity"
              type="number"
              className="input_input"
              value={quantityInput}
              onChange={e => setQuantityInput(+e.target.value)}
            />
          </li>

          <li>
            <input
              name="recipe_ingredients_unit"
              id="recipe_ingredients_unit"
              type="text"
              className="input_input"
              placeholder={t('recipe_ingredients_unit')}
              value={unitInput}
              onChange={e => setUnitInput(e.target.value)}
            />
          </li>

          <li>
            <input
              name="recipe_ingredients_name"
              id="recipe_ingredients_name"
              type="text"
              className="input_input"
              placeholder={t('recipe_ingredients_name')}
              value={nameInput}
              onChange={e => setNameInput(e.target.value)}
            />
          </li>

          <li>
            <Button
              type="button"
              color="secondary"
              typeButton="button"
              onClick={handleSubmit}
              ariaLabel={t('recipe_ingredients_submit')}
              disabled={!nameInput || !unitInput || !quantityInput}
            >
              {t('recipe_ingredients_submit')}
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};
