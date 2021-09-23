import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

export interface NutritionalValuesItemProps {
  id: 'recipe_calories' | 'recipe_proteins' | 'recipe_fats' | 'recipe_carbohydrates';
  unit: string;
  data?: number;
}

export const NutritionalValuesItem: FC<NutritionalValuesItemProps> = ({ id, unit, data }) => {
  const { t } = useTranslation('global');

  return (
    <li>
      <span>{t(`recipes_nutritional_${id}`)}</span>
      <span>
        {data} {unit}
      </span>
    </li>
  );
};
