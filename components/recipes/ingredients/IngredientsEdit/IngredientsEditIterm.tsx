import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { IngredientsProps } from './IngredientsEdit';

interface Props {
  ingredient: IngredientsProps;
  removeItem: () => void;
}

export const IngredientsEditIterm: FC<Props> = ({ ingredient, removeItem }) => {
  return (
    <li>
      <span>
        {ingredient.quantity} {ingredient.unit}
      </span>
      <span>{ingredient.name}</span>
      <button type="button" onClick={removeItem}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </li>
  );
};
