import { AppProps } from 'next/dist/next-server/lib/router/router';
import Layout from '../components/layouts/Layout';
import 'tippy.js/dist/tippy.css';
import '../styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
