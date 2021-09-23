import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import { ChangeEvent, FC, useState } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { FormValuesTypes } from '../../../types/FormValuesTypes';

interface Props {
  id: Path<FormValuesTypes>;
  register: UseFormRegister<FormValuesTypes>;
  options: JSX.Element;
  error: boolean;
  required?: {
    required: boolean;
    showTextRequired?: boolean;
  };
  defaultValue?: number;
}

export const SelectInput: FC<Props> = ({
  id,
  register,
  options,
  error,
  required,
  defaultValue,
  children
}) => {
  const [value, setValue] = useState(defaultValue ?? 0);
  const { ref, ...rest } = register(id, { required: required?.required });
  const { t } = useTranslation('global');

  const handleSelect = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    setValue(+target.value);
  };

  return (
    <div className="input input_select input:labelOutside">
      <div className="input_box_content">
        <label htmlFor={id}>
          {t(`input_box_label_${id}`)}
          {required?.required && required?.showTextRequired && (
            <span className="input:required">{t('input_required')}</span>
          )}
        </label>

        <select
          {...rest}
          name={id}
          id={id}
          value={value}
          className={`input_input${error ? ' input:error' : ''}`}
          onChange={handleSelect}
          ref={ref}
        >
          {options}
        </select>

        <div className="input_select_icon">
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>

      {children && <p>{children}</p>}
    </div>
  );
};
