import useTranslation from 'next-translate/useTranslation';
import { ChangeEvent, FC, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValuesTypes } from '../../../../types/FormValuesTypes';
import { NutritionalValuesItemProps } from '../NutritionalValuesItem';
import { NutritionalValuesEditItemProps } from './NutritionalValuesEdit';

interface Props extends NutritionalValuesItemProps {
  register: UseFormRegister<FormValuesTypes>;
  defaultValues?: NutritionalValuesEditItemProps[];
}

export const NutritionalValuesEditItem: FC<Props> = ({ register, id, unit, defaultValues }) => {
  const [value, setValue] = useState(defaultValues?.find(el => el.id === id)?.value ?? 0);
  const { ref, ...rest } = register(id);
  const { t } = useTranslation('global');

  const handleInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(+target.value);
  };

  return (
    <li>
      <span>{t(`recipes_nutritional_${id}`)}</span>
      <input
        {...rest}
        id={id}
        value={value}
        onChange={handleInput}
        name={id}
        type="number"
        className="input_input"
        ref={ref}
      />
      <span>{unit}</span>
    </li>
  );
};
