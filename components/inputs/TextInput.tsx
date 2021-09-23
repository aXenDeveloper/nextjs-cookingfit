import { FC, ChangeEvent, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Path, UseFormRegister, Validate, ValidationRule } from 'react-hook-form';
import { FormValuesTypes } from '../../types/FormValuesTypes';

interface PropsNumber {
  id: Path<FormValuesTypes>;
  register: UseFormRegister<FormValuesTypes>;
  error: boolean;
  type?: 'number';
  icon?: IconProp;
  disabled?: boolean;
  required?: {
    required: boolean;
    showTextRequired?: boolean;
  };
  pattern?: ValidationRule<RegExp>;
  validate?:
    | Validate<string | number | boolean | FileList | ((index: number) => File | null)>
    | Record<
        string,
        Validate<string | number | boolean | FileList | ((index: number) => File | null)>
      >;
  labelOutsideInput?: boolean;
  min?: number;
  max?: number;
  defaultValue?: number;
}

interface PropsText {
  id: Path<FormValuesTypes>;
  register: UseFormRegister<FormValuesTypes>;
  error: boolean;
  type?: 'text' | 'password';
  icon?: IconProp;
  disabled?: boolean;
  required?: {
    required: boolean;
    showTextRequired?: boolean;
  };
  pattern?: ValidationRule<RegExp>;
  validate?:
    | Validate<string | number | boolean | FileList | ((index: number) => File | null)>
    | Record<
        string,
        Validate<string | number | boolean | FileList | ((index: number) => File | null)>
      >;
  labelOutsideInput?: boolean;
  min?: never;
  max?: never;
  defaultValue?: string;
}

type Props = PropsNumber | PropsText;

export const TextInput: FC<Props> = ({
  id,
  register,
  error,
  type = 'text',
  icon,
  disabled,
  required,
  pattern,
  validate,
  labelOutsideInput,
  min,
  max,
  defaultValue,
  children
}) => {
  const { t } = useTranslation('global');
  const [value, setValue] = useState(defaultValue ?? '');
  const { ref, ...rest } = register(id, {
    required: required?.required,
    min,
    max,
    pattern,
    validate
  });

  const handleInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  return (
    <div className={`input${labelOutsideInput ? ' input:labelOutside' : ' input_box'}`}>
      <div className="input_box_content">
        <input
          {...rest}
          id={id}
          type={type}
          name={id}
          className={`input_input${value ? ' input:fill' : ''}${icon ? ' input:icon' : ''}${
            error ? ' input:error' : ''
          }`}
          onChange={handleInput}
          value={value}
          disabled={disabled}
          min={min}
          max={max}
          ref={ref}
        />

        <label htmlFor={id}>
          {t(`input_box_label_${id}`)}
          {required?.required && required?.showTextRequired && (
            <span className="input:required">{t('input_required')}</span>
          )}
        </label>

        {icon && (
          <div className="input_box_content_icon">
            <FontAwesomeIcon icon={icon} />
          </div>
        )}
      </div>

      {children && <p>{children}</p>}
    </div>
  );
};
