export interface RecipeModel {
  id: number;
  title: string;
  category_id: number;
  author_id: number;
  publish_date: number;
  image?: string;
}
