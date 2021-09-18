import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { IngredientsProps } from '../../../../types/database/RecipesType';

interface Props {
  ingredient: IngredientsProps;
  removeItem: () => void;
  index: number;
  serveCount: number;
}

export const IngredientsEditIterm: FC<Props> = ({ ingredient, removeItem, index, serveCount }) => {
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
                {ingredient.quantity} {ingredient.unit}
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
