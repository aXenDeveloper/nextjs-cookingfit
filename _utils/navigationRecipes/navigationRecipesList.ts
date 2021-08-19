import {
  faCocktail,
  faCookieBite,
  faFish,
  faHamburger,
  faIceCream,
  faSeedling
} from '@fortawesome/free-solid-svg-icons';

export const navigationRecipesList = [
  {
    id: 1,
    title: 'breakfasts',
    path: '/recipes/breakfasts'
  },
  {
    id: 2,
    title: 'dinners',
    path: '/recipes/dinners'
  },
  {
    id: 3,
    title: 'soups',
    path: '/recipes/soups'
  },
  {
    id: 4,
    title: 'fastfoods',
    path: '/recipes/fastfoods',
    icon: faHamburger
  },
  {
    id: 5,
    title: 'seafoods',
    path: '/recipes/seafoods',
    icon: faFish
  },
  {
    id: 6,
    title: 'salads',
    path: '/recipes/salads',
    icon: faSeedling
  },
  {
    id: 7,
    title: 'desserts',
    path: '/recipes/desserts'
  },
  {
    id: 8,
    title: 'icecreams',
    path: '/recipes/icecreams',
    icon: faIceCream
  },
  {
    id: 9,
    title: 'snacks',
    path: '/recipes/snacks',
    icon: faCookieBite
  },
  {
    id: 10,
    title: 'drinks',
    path: '/recipes/drinks',
    icon: faCocktail
  }
];
