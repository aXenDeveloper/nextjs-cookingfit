export interface ShoppingListProps {
  id: number;
  member_id: number;
  name: string;
  quantity: number;
  unit?: string;
}

export interface ShoppingListModelAPI {
  results: ShoppingListProps[];
}
