import { AppProps } from 'next/dist/shared/lib/router/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'next-auth/client';
import NextNprogress from 'nextjs-progressbar';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

import 'tippy.js/dist/tippy.css';
import '../styles/global.scss';

import Layout from '../components/layouts/Layout';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <NextNprogress
      color="var(--color-primary)"
      startPosition={0.3}
      stopDelayMs={200}
      height={4}
      options={{ showSpinner: false }}
    />

    <DefaultSeo {...SEO} />

    <Layout>
      <Provider session={pageProps.session}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Provider>
    </Layout>
  </>
);

export default MyApp;
