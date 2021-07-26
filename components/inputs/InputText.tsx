import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import { ChangeEvent, useState } from 'react';
import { FC } from 'react';

interface Props {
  id: string;
  icon?: IconProp;
  disabled?: boolean;
}

export const InputText: FC<Props> = ({ id, icon, disabled }) => {
  const { t } = useTranslation('global');
  const [value, setValue] = useState('');

  const handleInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  return (
    <div className="input_text">
      <div className="input_text_content">
        <input
          id={id}
          type="text"
          className={`${value ? 'input_fill' : ''}${icon ? ' input_icon' : ''}`}
          onChange={handleInput}
          value={value}
          disabled={disabled}
        />
        <label htmlFor={id}>{t(`input_text_label_${id}`)}</label>
        {icon && <FontAwesomeIcon icon={icon} />}
      </div>

      <p>test</p>
    </div>
  );
};
