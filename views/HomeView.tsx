import { Breadcrumb } from '../components/Breadcrumb';
import { Container } from '../components/layouts/Container';
import { SliderRecipes } from '../components/slider/SliderRecipes';

export const HomeView = () => {
  return (
    <>
      <Breadcrumb />
      <Container>
        <SliderRecipes />
      </Container>
    </>
  );
};
