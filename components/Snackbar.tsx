import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  visible: boolean;
  setVisible: (el: boolean) => void;
}

const Snackbar: FC<Props> = ({ visible, setVisible, children }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (visible) {
      const setAnimatedTimeout = setTimeout(() => {
        setAnimated(true);
      }, 3000);

      const setCloseTimeout = setTimeout(() => {
        setVisible(false);
        setAnimated(false);
      }, 3260);

      () => {
        clearTimeout(setAnimatedTimeout);
        clearTimeout(setCloseTimeout);
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const currentJSXElement = (
    <div className={`snackbar${animated ? ' snackbar_fadeOut' : ''}`}>{children}</div>
  );

  return visible
    ? createPortal(currentJSXElement, document.querySelector('#nextjs_popups')!)
    : null;
};

export default Snackbar;
