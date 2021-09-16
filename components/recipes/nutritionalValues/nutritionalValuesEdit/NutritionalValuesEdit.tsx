import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValuesTypes } from '../../../../types/FormValuesTypes';
import { nutritionalValuesList } from '../../../../_utils/nutritionalValuesList';
import { NutritionalValuesEditItem } from './NutritionalValuesEditItem';

interface Props {
  register: UseFormRegister<FormValuesTypes>;
}

export const NutritionalValuesEdit: FC<Props> = ({ register }) => {
  const { t } = useTranslation('global');

  return (
    <div className="recipes_nutritional">
      <ul>
        {nutritionalValuesList.map(({ id, value }) => (
          <NutritionalValuesEditItem
            key={id}
            register={register}
            id={`recipe_${id}`}
            value={value}
          />
        ))}
      </ul>

      <div>
        <span>{t('recipes_nutritional_desc')}</span>
      </div>
    </div>
  );
};
