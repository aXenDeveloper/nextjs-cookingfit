export interface ShoppingListProps {
  member_id: number;
  list: string;
}

export interface ShoppingListModelAPI {
  results: ShoppingListProps;
}

export interface ShopingListPropsArray {
  id: string;
  name: string;
  quantity: number;
  checked: number;
  unit?: string;
}
