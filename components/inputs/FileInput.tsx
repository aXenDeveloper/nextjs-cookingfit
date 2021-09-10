import { FC } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { FormValuesTypes } from '../../types/FormValuesTypes';

interface Props {
  id: Path<FormValuesTypes>;
  register: UseFormRegister<FormValuesTypes>;
}

export const FileInput: FC<Props> = ({ id, register }) => {
  const { ref, ...rest } = register(id);

  return (
    <div className="input input_text">
      <div className={'input_text_content'}>
        <input {...rest} type="file" id={id} ref={e => ref(e)} />
      </div>
    </div>
  );
};
