import { FC, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ShopingListPropsArray } from '../../types/database/ShoppingType';
import { CheckBoxWithoutRegister } from '../inputs/checkBox/CheckBoxWithoutRegister';

interface Props {
  item: ShopingListPropsArray;
  index: number;
}

export const ShoppingItem: FC<Props> = ({ item, index }) => {
  const [checked, setChecked] = useState(!!item.checked || false);
  const [id] = useState(`shopping_item_${item.id}`);

  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <li {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
          <CheckBoxWithoutRegister id={id} withoutLabel value={checked} setValue={setChecked} />
          <span>{item.name}</span>
        </li>
      )}
    </Draggable>
  );
};
