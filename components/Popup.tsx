import { FC, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import useTranslation from 'next-translate/useTranslation';
import { useMutation } from 'react-query';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './Button';
import { SpinnersLoading } from './loading/SpinnersLoading';

interface Props {
  visible: boolean;
  setVisible: (el: boolean) => void;
  buttonText: string;
  cancalButton?: boolean;
  api?: {
    url: string;
    body?: {};
  };
}

const Popup: FC<Props> = ({ visible, setVisible, buttonText, cancalButton, api, children }) => {
  const [animated, setAnimated] = useState(false);
  const { t } = useTranslation('global');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const scrollTop = useMemo(() => document.documentElement.scrollTop, [visible]);

  const handleClose = () => {
    setAnimated(true);

    setTimeout(() => {
      setVisible(false);
      setAnimated(false);
    }, 260);
  };

  const { mutateAsync, isLoading } = useMutation(async () => {
    if (api) {
      const res = await fetch(api.url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: api.body ? JSON.stringify(api.body) : undefined
      });

      if (res.status === 200) {
        handleClose();
      }

      return null;
    }
  });

  const currentJSXElement = (
    <>
      <div
        className={`popup${animated ? ' popup_fadeOut' : ''}`}
        style={{ top: `${scrollTop}px` }}
        onClick={handleClose}
      >
        <div
          className="popup_content"
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {isLoading ? (
            <div className="text_center">
              <SpinnersLoading />
            </div>
          ) : (
            <>
              <div className="popup_content:icon">
                <FontAwesomeIcon icon={faExclamationTriangle} />
              </div>

              {children}

              <ul className="popup_content_buttons">
                <li>
                  <Button
                    type="button"
                    ariaLabel={buttonText}
                    color="primary"
                    onClick={() => {
                      if (api) {
                        mutateAsync();
                        return;
                      }
                    }}
                  >
                    {buttonText}
                  </Button>
                </li>

                {cancalButton && (
                  <li>
                    <Button
                      type="button"
                      ariaLabel={t('action_cancel')}
                      color="light"
                      onClick={handleClose}
                    >
                      {t('action_cancel')}
                    </Button>
                  </li>
                )}
              </ul>
            </>
          )}
        </div>
      </div>
      <div
        className={`popup_background${animated ? ' popup_background_fadeOut' : ''}`}
        onClick={handleClose}
      />
    </>
  );

  return visible
    ? createPortal(currentJSXElement, document.querySelector('#nextjs_popups')!)
    : null;
};

export default Popup;
