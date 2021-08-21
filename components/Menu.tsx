import { FC, useState } from 'react';
import Tippy from '@tippyjs/react';

export const Menu: FC = ({ children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Tippy content={children} interactive className="menu" visible={visible}>
        <button onClick={() => setVisible(!visible)}>test</button>
      </Tippy>
    </div>
  );
};
