import { PaginationType } from './PaginationType';

export interface RecipesModel {
  id: number;
  title: string;
  url: string;
  member_name: string;
  member_name_seo: string;
  publish_date: number;
  difficulty: 1 | 2 | 3;
  time: number;
  text: number;
  category_name: string;
  image?: string;
}

export interface RecipeModel {
  id: number;
  title: string;
  member_name: string;
  member_name_seo: string;
  publish_date: number;
  difficulty: 1 | 2 | 3;
  time: number;
  text: number;
  category_name: string;
  image?: string;
}

export interface RecipesModelAPI {
  page: PaginationType;
  results: RecipesModel[];
}
