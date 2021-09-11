import useTranslation from 'next-translate/useTranslation';
import { ChangeEvent, FC, useState } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { FormValuesTypes } from '../../types/FormValuesTypes';

interface Props {
  id: Path<FormValuesTypes>;
  register: UseFormRegister<FormValuesTypes>;
  min: number;
  max: number;
}

export const DifficultyRangeInput: FC<Props> = ({ id, register, min, max }) => {
  const [value, setValue] = useState(1);
  const { ref, ...rest } = register(id);
  const { t } = useTranslation('global');

  const handleRange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(+e.target.value);
  };

  return (
    <div className={`input input_range input:labelOutside input_range:${value}`}>
      <label htmlFor={id}>{t(`input_box_label_${id}`)}</label>

      <div className="input_range_content">
        <input
          {...rest}
          type="range"
          id={id}
          name={id}
          onChange={handleRange}
          value={value}
          min={min}
          max={max}
          ref={e => ref(e)}
        />

        <div
          className="input_range_content:fill"
          style={{ width: `${(100 / 2) * (value - 1)}%` }}
        />
      </div>

      <ul className="input_range_desc">
        <li className={value >= 1 ? 'input_range_desc:active' : ''}>{t('easy')}</li>
        <li className={value >= 2 ? 'input_range_desc:active' : ''}>{t('medium')}</li>
        <li className={value >= 3 ? 'input_range_desc:active' : ''}>{t('hard')}</li>
      </ul>
    </div>
  );
};
