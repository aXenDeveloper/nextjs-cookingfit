import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValuesTypes } from '../../../../types/FormValuesTypes';
import { NutritionalValuesItemProps } from '../NutritionalValuesItem';

interface Props extends NutritionalValuesItemProps {
  register: UseFormRegister<FormValuesTypes>;
}

export const NutritionalValuesEditItem: FC<Props> = ({ register, id, value }) => {
  const { ref, ...rest } = register(id);
  const { t } = useTranslation('global');

  return (
    <li>
      <span>{t(`recipes_nutritional_${id}`)}</span>
      <input {...rest} id={id} name={id} type="number" className="input_input" ref={ref} />
      <span>{value}</span>
    </li>
  );
};
