import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValuesTypes } from '../../../../types/FormValuesTypes';
import { nutritionalValuesList } from '../../../../_utils/nutritionalValuesList';
import { NutritionalValuesEditItem } from './NutritionalValuesEditItem';

interface Props {
  register: UseFormRegister<FormValuesTypes>;
}

export const NutritionalValuesEdit: FC<Props> = ({ register }) => (
  <ul className="recipes_nutritional">
    {nutritionalValuesList.map(({ id, value }) => (
      <NutritionalValuesEditItem key={id} register={register} id={`recipe_${id}`} value={value} />
    ))}
  </ul>
);
