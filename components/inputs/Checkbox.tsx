import { FC } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';

interface Props {
  id: string;
  required?: boolean;
}

export const Checkbox: FC<Props> = ({ id, required }) => {
  const { t } = useTranslation('global');

  return (
    <div className="input input_checkbox">
      <span className="input_checkbox_icon">
        <input type="checkbox" id={id} />
        <span>
          <span>
            <FontAwesomeIcon icon={faCheck} />
          </span>
        </span>
      </span>

      <label htmlFor={id}>
        {t(`input_checkbox_label_${id}`)}
        {required && <span className="input:required">{t('input_required')}</span>}
      </label>
    </div>
  );
};
