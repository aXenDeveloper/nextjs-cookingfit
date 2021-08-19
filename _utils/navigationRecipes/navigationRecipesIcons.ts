import breakfastsSVG from '../../assets/icons/breakfasts.svg';
import dinnersSVG from '../../assets/icons/dinners.svg';
import soupsSVG from '../../assets/icons/soups.svg';
import dessertsSVG from '../../assets/icons/desserts.svg';

interface Props {
  [key: string]: any;
}

export const iconSVG: Props = {
  breakfasts: breakfastsSVG,
  dinners: dinnersSVG,
  soups: soupsSVG,
  desserts: dessertsSVG
};
