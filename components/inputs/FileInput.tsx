import { FC, useRef, useState } from 'react';
import Image from 'next/image';
import { faTimes, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import { Path, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { FormValuesTypes } from '../../types/FormValuesTypes';
import { Button } from '../Button';
import { bytesToSize } from '../../functions/bytesToSize';
import Tippy from '@tippyjs/react';

interface Props {
  id: Path<FormValuesTypes>;
  register: UseFormRegister<FormValuesTypes>;
  setValue: UseFormSetValue<FormValuesTypes>;
  file?: File | null;
  setFile: (el: File | null) => void;
}

export const FileInput: FC<Props> = ({ id, register, setValue, file, setFile }) => {
  const { ref, onChange, ...rest } = register(id);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDrag, setDrag] = useState(false);
  const [preview, setPreview] = useState('');
  const { t } = useTranslation('global');

  return (
    <div className="input input_file">
      <div
        className={`input_file_content${isDrag ? ' input_file_content:drag' : ''}`}
        onDragOver={e => {
          e.preventDefault();
          setDrag(true);
        }}
        onDragLeave={e => {
          e.preventDefault();
          setDrag(false);
        }}
        onDrop={e => {
          e.preventDefault();
          setDrag(false);

          if (e.dataTransfer.files.length === 1) {
            setValue(id, e.dataTransfer.files);
            setFile(e.dataTransfer.files[0]);
            setPreview(URL.createObjectURL(e.dataTransfer.files[0]));
          }
        }}
      >
        <input
          {...rest}
          type="file"
          id={id}
          onChange={e => {
            if (e.target.files?.length && e.target.files) {
              setFile(e.target.files[0]);
              setPreview(URL.createObjectURL(e.target.files[0]));
            } else {
              setFile(null);
              setValue(id, '');
              setPreview('');
            }
          }}
          ref={e => {
            ref(e);
            inputRef.current = e;
          }}
        />

        <Button
          color="primary"
          type="button"
          ariaLabel="Test"
          onClick={() => {
            inputRef.current?.click();
          }}
          typeButton="button"
        >
          <FontAwesomeIcon icon={faUpload} /> {t('input_file_label')}
        </Button>

        <div className="input_file_content_desc">
          <span>{t('input_file_desc')}</span>
          <p>{t('input_file_desc_accepted')}</p>
        </div>

        {file && (
          <div className="input_file_content_preview">
            <div className="input_file_content_preview:image">
              <Image src={preview} alt={file.name} layout="fill" />
            </div>

            <div className="input_file_content_preview_desc">
              <span>{file.name}</span>
              <p>{bytesToSize(file.size)}</p>
            </div>

            <Tippy content={t('tooltip_delete_file')}>
              <button
                className="input_file_content_preview:delete"
                type="button"
                onClick={() => {
                  setFile(null);
                  setValue(id, '');
                  setPreview('');
                }}
                aria-label={t('tooltip_delete_file')}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </Tippy>
          </div>
        )}
      </div>
    </div>
  );
};
