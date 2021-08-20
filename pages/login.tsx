import { GetServerSideProps, NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { getCsrfToken } from 'next-auth/client';
import { NextSeo } from 'next-seo';
import { Layout } from '../components/layouts/Layout';
import { LoginView } from '../views/LoginView';

interface Props {
  csrfToken: string;
}

const LoginPage: NextPage<Props> = ({ csrfToken }) => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <NextSeo title={t('title_seo_page', { title: t('navigation_login') })} />
      <LoginView csrfToken={csrfToken} />
    </Layout>
  );
};

export async function getServerSideProps(context: GetServerSideProps<Props>) {
  return {
    props: {
      // @ts-ignore
      csrfToken: await getCsrfToken(context)
    }
  };
}

export default LoginPage;
