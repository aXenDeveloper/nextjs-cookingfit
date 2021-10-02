import { ChangeEvent, FC, FormEvent } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  id: string;
  error?: boolean;
  withoutLabel?: boolean;
  value?: boolean;
  setValue?: (e: boolean) => void;
}

export const CheckBoxWithoutRegister: FC<Props> = ({
  id,
  error,
  withoutLabel,
  value,
  setValue,
  children
}) => {
  const { t } = useTranslation('global');

  return (
    <div className="input input_checkbox">
      <span className={`input_checkbox_icon${error ? ' input:error' : ''}`}>
        <input
          type="checkbox"
          id={id}
          name={id}
          checked={value}
          onChange={() => setValue && setValue(!value)}
        />
        <span>
          <span>
            <FontAwesomeIcon icon={faCheck} />
          </span>
        </span>
      </span>

      {!withoutLabel && (
        <label htmlFor={id}>{children ? children : t(`input_checkbox_label_${id}`)}</label>
      )}
    </div>
  );
};
