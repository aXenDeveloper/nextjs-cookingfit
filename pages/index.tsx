import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { Checkbox } from '../components/inputs/Checkbox';
import { TextInput } from '../components/inputs/TextInput';

const HomeView = () => {
  return (
    <div>
      <TextInput id='test' icon={faMailBulk} required>
        Lorem Ipsum is simply dummy text of...
      </TextInput>
      <Checkbox id='test123' required />
    </div>
  );
};

export default HomeView;
