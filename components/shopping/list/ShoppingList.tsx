import { FC } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useMutation } from 'react-query';
import { useAuth } from '../../../context/useAuth';
import { ShopingListPropsArray, ShoppingListProps } from '../../../types/database/ShoppingType';
import { arrayMove } from '../../../functions/arrayMove';
import { ShoppingListItem } from './ShoppingListItem';

interface Props {
  list: ShopingListPropsArray[];
  setList: (list: ShopingListPropsArray[]) => void;
}

export const ShoppingList: FC<Props> = ({ list, setList }) => {
  const { session } = useAuth();

  const { mutateAsync } = useMutation(async ({ member_id, list }: ShoppingListProps) => {
    await fetch('/api/recipes/shopping/edit', {
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

    setList(arrayMove(list, source.index, destination.index));

    if (session) {
      mutateAsync({
        member_id: session.user.id,
        list: JSON.stringify(list)
      });
    }
  };

  const handleChange = (item: ShopingListPropsArray) => {
    const currentIndex = list.findIndex(el => el.id === item.id);

    const updateList = list.map((el, index) => {
      if (currentIndex === index) {
        return item;
      }

      return el;
    });

    setList(updateList);

    if (session) {
      mutateAsync({
        member_id: session.user.id,
        list: JSON.stringify(updateList)
      });
    }
  };

  const handleDelete = (item: ShopingListPropsArray) => {
    const updateList = list.filter(el => el.id !== item.id);

    setList(updateList);

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
              {list.map((el: ShopingListPropsArray, index: number) => (
                <ShoppingListItem
                  key={el.id}
                  item={el}
                  index={index}
                  handleChange={handleChange}
                  handleDelete={handleDelete}
                />
              ))}
              {provided.placeholder}
            </>
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};
