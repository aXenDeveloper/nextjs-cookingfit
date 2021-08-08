import { FC } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import { Path, UseFormRegister } from 'react-hook-form';

import { FormValuesTypes } from '../../_utils/types/FormValuesTypes';

interface Props {
  id: Path<FormValuesTypes>;
  register: UseFormRegister<FormValuesTypes>;
  required?: boolean;
}

export const Checkbox: FC<Props> = ({ id, register, required }) => {
  const { t } = useTranslation('global');
  const { ref, ...rest } = register(id, { required });

  return (
    <div className='input input_checkbox'>
      <span className='input_checkbox_icon'>
        <input
          {...rest}
          type='checkbox'
          id={id}
          name={id}
          ref={(e) => ref(e)}
        />
        <span>
          <span>
            <FontAwesomeIcon icon={faCheck} />
          </span>
        </span>
      </span>

      <label htmlFor={id}>
        {t(`input_checkbox_label_${id}`)}
        {required && (
          <span className='input:required'>{t('input_required')}</span>
        )}
      </label>
    </div>
  );
};
