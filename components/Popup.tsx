import { FC, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  visible: boolean;
  setVisible: (el: boolean) => void;
}

const Popup: FC<Props> = ({ visible, setVisible, children }) => {
  const [animated, setAnimated] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const scrollTop = useMemo(() => document.documentElement.scrollTop, [visible]);

  const handleClose = () => {
    setAnimated(true);

    setTimeout(() => {
      setVisible(false);
      setAnimated(false);
    }, 260);
  };

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
          {children}
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
