import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValuesTypes } from '../../../../types/FormValuesTypes';
import { nutritionalValuesList } from '../../../../_utils/nutritionalValuesList';
import { NutritionalValuesEditItem } from './NutritionalValuesEditItem';

export interface NutritionalValuesEditItemProps {
  id: string;
  value: number;
}

interface Props {
  register: UseFormRegister<FormValuesTypes>;
  defaultValues?: NutritionalValuesEditItemProps[];
}

export const NutritionalValuesEdit: FC<Props> = ({ register, defaultValues }) => {
  const { t } = useTranslation('global');

  return (
    <div className="recipes_nutritional">
      <ul>
        {nutritionalValuesList.map(({ id, unit }) => (
          <NutritionalValuesEditItem
            key={id}
            register={register}
            id={`recipe_${id}`}
            unit={unit}
            defaultValues={defaultValues}
          />
        ))}
      </ul>

      <div>
        <span>{t('recipes_nutritional_desc')}</span>
      </div>
    </div>
  );
};
