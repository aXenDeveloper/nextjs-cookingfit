import { FC, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useMutation } from 'react-query';
import { useAuth } from '../../../context/useAuth';
import { ShopingListPropsArray, ShoppingListProps } from '../../../types/database/ShoppingType';
import { arrayMove } from '../../../functions/arrayMove';
import { ShoppingListItem } from './ShoppingListItem';

interface Props {
  list: ShopingListPropsArray[];
}

export const ShoppingList: FC<Props> = ({ list }) => {
  const [currentList, setCurrentList] = useState(list);
  const { session } = useAuth();

  const { mutateAsync } = useMutation(async ({ member_id, list }: ShoppingListProps) => {
    await fetch('/api/recipes/shopping/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        member_id,
        list
      })
    });

    return null;
  });

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId && destination.index === source.index)
    ) {
      return;
    }

    setCurrentList(arrayMove(list, source.index, destination.index));

    if (session) {
      mutateAsync({
        member_id: session.user.id,
        list: JSON.stringify(currentList)
      });
    }
  };

  const handleChange = (item: ShopingListPropsArray) => {
    const currentIndex = currentList.findIndex(el => el.id === item.id);

    const updateList = currentList.map((el, index) => {
      if (currentIndex === index) {
        return item;
      }

      return el;
    });

    setCurrentList(updateList);

    if (session) {
      mutateAsync({
        member_id: session.user.id,
        list: JSON.stringify(updateList)
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="shopping_list">
        {provided => (
          <ul className="shopping_list" ref={provided.innerRef} {...provided.droppableProps}>
            <>
              {currentList.map((el: ShopingListPropsArray, index: number) => (
                <ShoppingListItem key={el.id} item={el} index={index} handleChange={handleChange} />
              ))}
              {provided.placeholder}
            </>
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};
