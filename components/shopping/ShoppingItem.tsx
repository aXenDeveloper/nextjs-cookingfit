import { FC } from 'react';
import { ShoppingListProps } from '../../types/database/ShoppingType';
import { CheckBoxWithoutRegister } from '../inputs/checkBox/CheckBoxWithoutRegister';

interface Props {
  item: ShoppingListProps;
}

export const ShoppingItem: FC<Props> = ({ item }) => {
  return (
    <li>
      <CheckBoxWithoutRegister id={`shopping_item_${item.id}`} />
      <span>{item.name}</span>
    </li>
  );
};
