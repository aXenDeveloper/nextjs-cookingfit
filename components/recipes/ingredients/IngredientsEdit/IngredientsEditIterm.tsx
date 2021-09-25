import { FC } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import { Draggable } from 'react-beautiful-dnd';
import { IngredientsProps } from '../../../../types/database/RecipesType';

interface Props {
  ingredient: IngredientsProps;
  removeItem: () => void;
  index: number;
  serveCountFromDB?: number;
}

export const IngredientsEditIterm: FC<Props> = ({
  ingredient,
  removeItem,
  index,
  serveCountFromDB
}) => {
  const { t } = useTranslation('global');

  const count = serveCountFromDB ? ingredient.quantity * serveCountFromDB : ingredient.quantity;

  return (
    <>
      <Draggable draggableId={ingredient.id} index={index}>
        {provided => (
          <li {...provided.draggableProps} ref={provided.innerRef}>
            <ul>
              <li {...provided.dragHandleProps}>
                <FontAwesomeIcon icon={faBars} />
              </li>
              <li>
                {count}{' '}
                {t(`recipe_ingredients_unit_${ingredient.unit}`, {
                  count
                })}
              </li>
              <li>{ingredient.name}</li>
              <li>
                <button type="button" onClick={removeItem}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </li>
            </ul>
          </li>
        )}
      </Draggable>
    </>
  );
};
