import { FC, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ShopingListPropsArray } from '../../../types/database/ShoppingType';
import { CheckBoxWithoutRegister } from '../../inputs/checkBox/CheckBoxWithoutRegister';

interface Props {
  item: ShopingListPropsArray;
  handleChange: (el: ShopingListPropsArray) => void;
  index: number;
}

export const ShoppingListItem: FC<Props> = ({ item, handleChange, index }) => {
  const [checked, setChecked] = useState(!!item.checked || false);
  const [id] = useState(`shopping_item_${item.id}`);

  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <li {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
          <CheckBoxWithoutRegister
            id={id}
            withoutLabel
            value={checked}
            setValue={el => {
              setChecked(el);
              handleChange({ ...item, checked: el ? 1 : 0 });
            }}
          />
          <span>{item.name}</span>
        </li>
      )}
    </Draggable>
  );
};
