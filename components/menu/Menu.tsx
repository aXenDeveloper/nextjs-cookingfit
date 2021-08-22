import { FC } from 'react';
import Tippy from '@tippyjs/react';

interface Props {
  title: string;
  visible: boolean;
  setVisible(val: boolean): void;
}

export const Menu: FC<Props> = ({ title, visible, setVisible, children }) => (
  <div>
    <Tippy
      content={children}
      interactive
      className="menu"
      visible={visible}
      onClickOutside={() => setVisible(false)}
    >
      <button onClick={() => setVisible(!visible)}>{title}</button>
    </Tippy>
  </div>
);
