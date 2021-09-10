import { FC } from 'react';
import Tippy from '@tippyjs/react';

interface Props {
  title: string | JSX.Element;
  visible: boolean;
  setVisible(val: boolean): void;
  className?: string;
}

export const Menu: FC<Props> = ({ title, visible, setVisible, className, children }) => (
  <div>
    <Tippy
      content={children}
      interactive
      className="menu"
      visible={visible}
      onClickOutside={() => setVisible(false)}
    >
      <button onClick={() => setVisible(!visible)} className={className}>
        {title}
      </button>
    </Tippy>
  </div>
);
