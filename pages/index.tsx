import { Checkbox } from '../components/inputs/Checkbox';
import Container from '../components/layouts/Container';
import { Menu } from '../components/Menu';

const HomeView = () => {
  return (
    <Container small>
      <Checkbox id='test123' required />

      <Menu>
        <div>test</div>
      </Menu>
    </Container>
  );
};

export default HomeView;
