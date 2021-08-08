import { GetServerSideProps, NextPage } from 'next';
import { useMutation } from 'react-query';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import { useForm, SubmitHandler } from 'react-hook-form';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { getCsrfToken } from 'next-auth/client';

import { Container } from '../components/layouts/Container';
import { TextInput } from '../components/inputs/TextInput';
import { Button } from '../components/Button';
import { FormValuesTypes } from '../_utils/types/FormValuesTypes';
import { Checkbox } from '../components/inputs/Checkbox';
import { emailRegex } from '../_utils/regex';
import { useState } from 'react';

interface LoginProps {
  email: string;
  password: string;
}

interface Props {
  csrfToken: string;
}

const LoginPage: NextPage<Props> = ({ csrfToken }) => {
  const { t } = useTranslation('global');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesTypes>();

  const [isError, setIsError] = useState(false);

  const onSubmit: SubmitHandler<FormValuesTypes> = (data) => {
    mutateAsync({ email: data.email, password: data.password });
  };

  const { mutateAsync, isLoading } = useMutation(
    async ({ email, password }: LoginProps) => {
      const res = await fetch('/api/auth/callback/credentials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          csrfToken,
          email,
          password,
        }),
      });

      if (res.status === 200 && !res.url.includes('signin?error=')) {
        setIsError(false);
        window.location.href = res.url;
      } else {
        setIsError(true);
      }

      return null;
    },
  );

  return (
    <Container small>
      <div className='box padding'>
        <div className='container_title'>
          <h1 className='title title_h1'>{t('page_title_sign_in')}</h1>
          <p>
            <Trans
              i18nKey='global:page_desc_sign_in'
              components={[<Link href='/register' key='page_desc_sign_in' />]}
            />
          </p>

          <hr className='hr' />

          {isError && <div>Error!</div>}

          <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <ul>
              <li>
                <TextInput
                  id='email'
                  icon={faMailBulk}
                  register={register}
                  error={!!errors.email}
                  required={{
                    required: true,
                    text: false,
                  }}
                  pattern={emailRegex}
                />
              </li>

              <li>
                <TextInput
                  type='password'
                  id='password'
                  icon={faMailBulk}
                  register={register}
                  error={!!errors.password}
                  required={{
                    required: true,
                    text: false,
                  }}
                />
              </li>

              <li>
                <Checkbox id='remember' register={register} />
              </li>

              <li>
                <Button
                  type='button'
                  color='primary'
                  typeButton='submit'
                  fullWidth
                >
                  {t('button_text_sign_in')}
                </Button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </Container>
  );
};

export async function getServerSideProps(context: GetServerSideProps<Props>) {
  return {
    props: {
      // @ts-ignore
      csrfToken: await getCsrfToken(context),
    },
  };
}

export default LoginPage;
