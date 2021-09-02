export interface RecipeModel {
  id: number;
  title: string;
  member_name: string;
  member_name_seo: string;
  publish_date: number;
  difficulty: 1 | 2 | 3;
  category_name: string;
  image?: string;
}

export interface RecipeModelAPI {
  next: boolean;
  results: RecipeModel[];
}
