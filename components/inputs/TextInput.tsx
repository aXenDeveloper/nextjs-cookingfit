import { FC, ChangeEvent, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  id: string;
  icon?: IconProp;
  disabled?: boolean;
  required?: boolean;
}

export const TextInput: FC<Props> = ({ id, icon, disabled, children, required }) => {
  const { t } = useTranslation('global');
  const [value, setValue] = useState('');

  const handleInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  return (
    <div className="input input_text">
      <div className="input_text_content">
        <input
          id={id}
          type="text"
          className={`${value ? 'input:fill' : ''}${icon ? ' input:icon' : ''}`}
          onChange={handleInput}
          value={value}
          disabled={disabled}
          required={required}
        />
        <label htmlFor={id}>
          {t(`input_text_label_${id}`)}
          {required && <span className="input:required">{t('input_required')}</span>}
        </label>
        {icon && <FontAwesomeIcon icon={icon} />}
      </div>

      {children && <p>{children}</p>}
    </div>
  );
};
