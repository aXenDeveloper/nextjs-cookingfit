import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Menu } from './Menu';

export const ActionRecipeMenu = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Menu
      title={<FontAwesomeIcon icon={faEllipsisH} />}
      visible={visible}
      setVisible={() => setVisible(!visible)}
    >
      test
    </Menu>
  );
};
