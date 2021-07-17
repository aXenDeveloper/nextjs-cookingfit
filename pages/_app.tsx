import { AppProps } from 'next/dist/next-server/lib/router/router';
import Container from '../components/layouts/Container';
import Layout from '../components/layouts/Layout';
import '../styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Container>
      <Component {...pageProps} />
    </Container>
  </Layout>
);

export default MyApp;
