import { ChangeEvent, FC } from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: JSX.Element;
  error?: boolean;
}

export const SelectInputWithoutRegister: FC<Props> = ({
  id,
  value,
  onChange,
  options,
  error,
  children
}) => (
  <div className="input input_select input:labelOutside">
    <div className="input_box_content">
      <select
        name={id}
        id={id}
        className={`input_input${error ? ' input:error' : ''}`}
        value={value}
        onChange={onChange}
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
