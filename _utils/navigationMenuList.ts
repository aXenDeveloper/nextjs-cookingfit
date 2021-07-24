import { faAppleAlt, faCalculator, faHome, faUtensils } from '@fortawesome/free-solid-svg-icons';

export const navigationMenuList = [
  {
    id: 1,
    title: 'home',
    path: '/',
    icon: faHome
  },
  {
    id: 2,
    title: 'recipes',
    path: '/recipes',
    icon: faUtensils
  },
  {
    id: 3,
    title: 'products',
    path: '/products',
    icon: faAppleAlt
  },
  {
    id: 4,
    title: 'calculators',
    path: '/calculators',
    icon: faCalculator
  }
];
