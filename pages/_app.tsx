import { AppProps } from 'next/dist/next-server/lib/router/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'next-auth/client';
import Layout from '../components/layouts/Layout';
import 'tippy.js/dist/tippy.css';
import '../styles/global.scss';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Provider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  </Layout>
);

export default MyApp;
