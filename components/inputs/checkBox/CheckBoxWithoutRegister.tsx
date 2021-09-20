import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  id: string;
  error?: boolean;
}

export const CheckBoxWithoutRegister: FC<Props> = ({ id, error, children }) => {
  const { t } = useTranslation('global');

  return (
    <div className="input input_checkbox">
      <span className={`input_checkbox_icon${error ? ' input:error' : ''}`}>
        <input type="checkbox" id={id} name={id} />
        <span>
          <span>
            <FontAwesomeIcon icon={faCheck} />
          </span>
        </span>
      </span>

      <label htmlFor={id}>{children ? children : t(`input_checkbox_label_${id}`)}</label>
    </div>
  );
};
