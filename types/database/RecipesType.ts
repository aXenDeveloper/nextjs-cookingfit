import { PaginationType } from './PaginationType';

export type RecipesModel = {
  id: number;
  title: string;
  url: string;
  member_name: string;
  member_name_seo: string;
  publish_date: number;
  difficulty: 1 | 2 | 3;
  category_name: string;
  image?: string;
};

export type RecipeModel = {
  id: number;
  title: string;
  member_name: string;
  member_name_seo: string;
  publish_date: number;
  difficulty: 1 | 2 | 3;
  category_name: string;
  image?: string;
};

export type RecipesModelAPI = {
  page: PaginationType;
  results: RecipesModel[];
};
