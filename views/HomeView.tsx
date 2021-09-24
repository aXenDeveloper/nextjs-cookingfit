import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Container } from '../components/layouts/Container';
const Popup = dynamic(() => import('../components/Popup'), { ssr: false });

export const HomeView = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container small>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Click
      </button>

      <Popup visible={visible} setVisible={setVisible}>
        test
      </Popup>
      <br />
    </Container>
  );
};
