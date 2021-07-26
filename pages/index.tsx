import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { InputText } from '../components/inputs/InputText';

const HomeView = () => {
  return (
    <div>
      <InputText id="test" icon={faMailBulk} required>
        Lorem Ipsum is simply dummy text of...
      </InputText>
    </div>
  );
};

export default HomeView;
