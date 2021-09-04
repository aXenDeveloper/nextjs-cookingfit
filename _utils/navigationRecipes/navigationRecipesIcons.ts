import { BreakfastsIcon } from '../../assets/icons/BreakfastsIcon';
import { DessertsIcon } from '../../assets/icons/DessertsIcon';
import { DinnersIcon } from '../../assets/icons/DinnersIcon';
import { SoupsIcon } from '../../assets/icons/SoupsIcon';

type Props = {
  [key: string]: any;
};

export const iconSVG: Props = {
  breakfasts: BreakfastsIcon,
  dinners: DinnersIcon,
  soups: SoupsIcon,
  desserts: DessertsIcon
};
