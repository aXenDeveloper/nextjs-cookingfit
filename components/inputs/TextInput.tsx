import { FC, ChangeEvent, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Path, UseFormRegister } from 'react-hook-form';

import { FormValuesTypes } from '../../_utils/types/FormValuesTypes';

interface Props {
  id: Path<FormValuesTypes>;
  type?: 'text' | 'password';
  register: UseFormRegister<FormValuesTypes>;
  icon?: IconProp;
  disabled?: boolean;
  required?: boolean;
}

export const TextInput: FC<Props> = ({
  id,
  type = 'text',
  icon,
  disabled,
  children,
  required,
  register,
}) => {
  // TODO: Add error
  const { t } = useTranslation('global');
  const [value, setValue] = useState('');
  const { ref, ...rest } = register(id, { required });

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
          className={`${value ? 'input:fill' : ''}${icon ? ' input:icon' : ''}`}
          onChange={handleInput}
          value={value}
          disabled={disabled}
          ref={(e) => ref(e)}
        />

        <label htmlFor={id}>
          {t(`input_text_label_${id}`)}
          {required && (
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
