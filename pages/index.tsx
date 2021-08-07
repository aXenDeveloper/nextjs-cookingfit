import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { Checkbox } from '../components/inputs/Checkbox';
import { TextInput } from '../components/inputs/TextInput';
import Container from '../components/layouts/Container';
import { Menu } from '../components/Menu';

const HomeView = () => {
  return (
    <Container small>
      <TextInput id='test' icon={faMailBulk} required>
        Lorem Ipsum is simply dummy text of...
      </TextInput>
      <Checkbox id='test123' required />

      <Menu>
        <div>test</div>
      </Menu>
    </Container>
  );
};

export default HomeView;
