import useTranslation from 'next-translate/useTranslation';
import { ChangeEvent, useState } from 'react';
import { FC } from 'react';

interface Props {
  id: string;
  disabled?: boolean;
}

export const InputText: FC<Props> = ({ id, disabled }) => {
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
          className={value ? ' input_fill' : ''}
          onChange={handleInput}
          value={value}
          disabled={disabled}
        />
        <label htmlFor={id}>{t(`input_text_label_${id}`)}</label>
      </div>

      <p>test</p>
    </div>
  );
};
