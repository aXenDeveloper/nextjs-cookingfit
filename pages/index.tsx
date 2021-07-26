import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { InputText } from '../components/inputs/InputText';

const HomeView = () => {
  return (
    <div>
      <InputText id="test" icon={faMailBulk} />
    </div>
  );
};

export default HomeView;
