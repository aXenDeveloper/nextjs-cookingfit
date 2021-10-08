import { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { faTimes, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import useTranslation from 'next-translate/useTranslation';
import { Path, UseFormRegister } from 'react-hook-form';
import { FormValuesTypes } from '../../types/FormValuesTypes';
import { Button } from '../Button';
import { bytesToSize } from '../../functions/bytesToSize';

interface Props {
  id: Path<FormValuesTypes>;
  register: UseFormRegister<FormValuesTypes>;
  file?: File | null;
  setFile: (el: File | null) => void;
  preview: string;
  setPreview: (el: string) => void;
}

export const FileInput: FC<Props> = ({ id, register, file, setFile, preview, setPreview }) => {
  const [renderedImage, setRenderedImage] = useState(false);
  const { ref, onChange, ...rest } = register(id);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDrag, setDrag] = useState(false);
  const { t } = useTranslation('global');

  useEffect(
    () => () => {
      setRenderedImage(false);
    },
    []
  );

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
            console.log(e.dataTransfer.files);

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

              return;
            }

            setFile(null);
            setPreview('');
          }}
          ref={e => {
            ref(e);
            inputRef.current = e;
          }}
        />

        <Button
          color="primary"
          type="button"
          ariaLabel={t('input_file_label')}
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

        {preview && (
          <div className="input_file_content_preview">
            <div
              className={`input_file_content_preview:image${
                !renderedImage ? ' input_file_content_preview:loading' : ''
              }`}
            >
              <Image
                src={preview}
                alt={file?.name ?? preview}
                layout="fill"
                onLoadingComplete={() => setRenderedImage(true)}
              />
            </div>

            <div className="input_file_content_preview_desc">
              <span>{file?.name ?? preview}</span>
              <p>{bytesToSize(file?.size ?? 1)}</p>
            </div>

            <Tippy content={t('tooltip_delete_file')}>
              <button
                className="input_file_content_preview:delete"
                type="button"
                onClick={() => {
                  setFile(null);
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
