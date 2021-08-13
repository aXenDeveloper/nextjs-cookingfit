import { FC } from 'react';
import { Breadcrumb } from './Breadcrumb';

import { Container } from './layouts/Container';

export const Error: FC = () => {
  return (
    <>
      <Breadcrumb>Error</Breadcrumb>

      <Container>
        <div className="box padding"></div>
      </Container>
    </>
  );
};
