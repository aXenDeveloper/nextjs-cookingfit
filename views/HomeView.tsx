import { useState } from 'react';
import { Container } from '../components/layouts/Container';
import Snackbar from '../components/Snackbar';

export const HomeView = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container small>
      <button onClick={() => setVisible(true)}>test</button>

      <Snackbar visible={visible} setVisible={setVisible}>
        Recipe has been deleted
      </Snackbar>
    </Container>
  );
};
