import { AppProps } from 'next/dist/next-server/lib/router/router';
import { Provider } from 'next-auth/client';
import Layout from '../components/layouts/Layout';
import 'tippy.js/dist/tippy.css';
import '../styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  </Layout>
);

export default MyApp;
