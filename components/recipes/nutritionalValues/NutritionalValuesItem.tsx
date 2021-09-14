import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

export interface NutritionalValuesItemProps {
  id: 'recipe_calories' | 'recipe_proteins' | 'recipe_fats' | 'recipe_carbohydrates';
  value: string;
  data?: number;
}

export const NutritionalValuesItem: FC<NutritionalValuesItemProps> = ({ id, value, data }) => {
  const { t } = useTranslation('global');

  return (
    <li>
      <span>{t(`recipes_nutritional_${id}`)}</span>
      <span>
        {data} {value}
      </span>
    </li>
  );
};
