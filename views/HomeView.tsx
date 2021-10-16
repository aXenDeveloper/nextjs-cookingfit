import { useQuery } from 'react-query';
import { Breadcrumb } from '../components/Breadcrumb';
import { Container } from '../components/layouts/Container';
import { SwiperRecipes } from '../components/recipes/swiper/SwiperRecipes';
import { RecipesModelAPI } from '../types/database/RecipesType';
import { apiURL } from '../_utils/api';

export const HomeView = () => {
  const recipes = useQuery<RecipesModelAPI>(
    ['recipeList'],
    async () => {
      const res = await fetch(`${apiURL}/recipes?limit=10`);

      return await res.json();
    },
    { keepPreviousData: true }
  );

  return (
    <>
      <Breadcrumb />
      <Container>
        <SwiperRecipes title="test" queryResult={recipes} />
      </Container>
    </>
  );
};
