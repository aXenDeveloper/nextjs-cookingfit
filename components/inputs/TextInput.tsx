import { FC, ChangeEvent, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Path, UseFormRegister } from 'react-hook-form';

import { FormValuesTypes } from '../../_utils/types/FormValuesTypes';

interface Props {
  id: Path<FormValuesTypes>;
  register: UseFormRegister<FormValuesTypes>;
  error: boolean;
  type?: 'text' | 'password';
  icon?: IconProp;
  disabled?: boolean;
  required?: {
    required: boolean;
    text?: boolean;
  };
  requiredText?: boolean;
}

export const TextInput: FC<Props> = ({
  id,
  register,
  error,
  type = 'text',
  icon,
  disabled,
  required,
  children,
}) => {
  const { t } = useTranslation('global');
  const [value, setValue] = useState('');
  const { ref, ...rest } = register(id, { required: required?.required });

  const handleInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  return (
    <div className='input input_text'>
      <div className='input_text_content'>
        <input
          {...rest}
          id={id}
          type={type}
          name={id}
          className={`${value ? 'input:fill' : ''}${icon ? ' input:icon' : ''}${
            error ? ' input:error' : ''
          }`}
          onChange={handleInput}
          value={value}
          disabled={disabled}
          ref={(e) => ref(e)}
        />

        <label htmlFor={id}>
          {t(`input_text_label_${id}`)}
          {required?.required && required?.text && (
            <span className='input:required'>{t('input_required')}</span>
          )}
        </label>

        {icon && (
          <div className='input_text_content_icon'>
            <FontAwesomeIcon icon={icon} />
          </div>
        )}
      </div>

      {children && <p>{children}</p>}
    </div>
  );
};
