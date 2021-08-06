import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { Checkbox } from '../components/inputs/Checkbox';
import { TextInput } from '../components/inputs/TextInput';
import { Menu } from '../components/Menu';

const HomeView = () => {
  return (
    <div>
      <TextInput id='test' icon={faMailBulk} required>
        Lorem Ipsum is simply dummy text of...
      </TextInput>
      <Checkbox id='test123' required />

      <Menu>
        <div>test</div>
      </Menu>
    </div>
  );
};

export default HomeView;
