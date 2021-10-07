import { faEdit, faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ShopingListPropsArray } from '../../../types/database/ShoppingType';
import { CheckBoxWithoutRegister } from '../../inputs/checkBox/CheckBoxWithoutRegister';

interface Props {
  item: ShopingListPropsArray;
  handleChange: (el: ShopingListPropsArray) => void;
  handleDelete: (el: ShopingListPropsArray) => void;
  index: number;
}

export const ShoppingListItem: FC<Props> = ({ item, handleChange, handleDelete, index }) => {
  const [checked, setChecked] = useState(!!item.checked || false);
  const [id] = useState(`shopping_item_${item.id}`);
  const { t } = useTranslation('global');

  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <li {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
          <div className="shopping_list_contnet">
            <CheckBoxWithoutRegister
              id={id}
              withoutLabel
              value={checked}
              setValue={el => {
                setChecked(el);
                handleChange({ ...item, checked: el ? 1 : 0 });
              }}
            />
            <span className="shopping_list_contnet:quantity">
              {item.quantity} {item.unit}
            </span>
            <span>{item.name}</span>
          </div>

          <ul className="shopping_list_action">
            <li>
              <button
                type="button"
                aria-label={t('action_edit')}
                onClick={() => {
                  console.log('edit');
                }}
              >
                <FontAwesomeIcon icon={faPencilAlt} />
              </button>
            </li>

            <li>
              <button
                type="button"
                aria-label={t('action_delete')}
                onClick={() => {
                  handleDelete(item);
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </li>
          </ul>
        </li>
      )}
    </Draggable>
  );
};
