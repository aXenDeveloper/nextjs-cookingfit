import { FC } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import { Path, UseFormRegister } from 'react-hook-form';
import { FormValuesTypes } from '../../_utils/types/FormValuesTypes';

interface Props {
  id: Path<FormValuesTypes>;
  error: boolean;
  register: UseFormRegister<FormValuesTypes>;
  required?: {
    required: boolean;
    showTextRequired?: boolean;
  };
}

export const Checkbox: FC<Props> = ({ id, error, register, required, children }) => {
  const { t } = useTranslation('global');
  const { ref, ...rest } = register(id, { required: required?.required });

  return (
    <div className="input input_checkbox">
      <span className={`input_checkbox_icon${error ? ' input:error' : ''}`}>
        <input {...rest} type="checkbox" id={id} name={id} ref={e => ref(e)} />
        <span>
          <span>
            <FontAwesomeIcon icon={faCheck} />
          </span>
        </span>
      </span>

      <label htmlFor={id}>
        {children ? children : t(`input_checkbox_label_${id}`)}
        {required && required.showTextRequired && (
          <span className="input:required">{t('input_required')}</span>
        )}
      </label>
    </div>
  );
};
