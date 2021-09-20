import { faAt, faLock } from '@fortawesome/free-solid-svg-icons';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/Button';
import { CheckBox } from '../components/inputs/checkBox/Checkbox';
import { TextInput } from '../components/inputs/TextInput';
import { Container } from '../components/layouts/Container';
import { SpinnersLoading } from '../components/loading/SpinnersLoading';
import { Message } from '../components/Message';
import { MessageBox } from '../components/messageBox/MessageBox';
import { useAuth } from '../context/useAuth';
import { emailRegex } from '../_utils/regex';
import { FormValuesTypes } from '../types/FormValuesTypes';

interface LoginProps {
  email: string;
  password: string;
}

interface Props {
  csrfToken: string;
}

export const LoginView: FC<Props> = ({ csrfToken }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValuesTypes>();
  const { t } = useTranslation('global');
  const { session, loading } = useAuth();
  const [error, setError] = useState(false);

  const { mutateAsync, isLoading, isError } = useMutation(
    async ({ email, password }: LoginProps) => {
      setError(false);

      const res = await fetch('/api/auth/callback/credentials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          csrfToken,
          email,
          password
        })
      });

      if (res.status === 200 && !res.url.includes('signin?error=')) {
        setError(false);
        window.location.href = res.url;
      } else {
        if (res.status !== 302) {
          setError(true);
        }
      }

      return null;
    }
  );

  const onSubmit: SubmitHandler<FormValuesTypes> = data => {
    mutateAsync({ email: data.email, password: data.password });
  };

  if (loading) {
    return (
      <Container small>
        <div className="padding text_center">
          <SpinnersLoading />
        </div>
      </Container>
    );
  }

  if (session) {
    return (
      <>
        <Breadcrumb>{t('navigation_login')}</Breadcrumb>
        <MessageBox code="1C102/2">{t('error_already_logged')}</MessageBox>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Breadcrumb>{t('navigation_login')}</Breadcrumb>
        <MessageBox code="5C102/1" />
      </>
    );
  }

  return (
    <Container small>
      <div className="box padding">
        <div className="container_title">
          <h1 className="title title_h1">{t('page_title_sign_in')}</h1>
          <p>
            <Trans
              i18nKey="global:page_desc_sign_in"
              components={[<Link href="/register" key="page_desc_sign_in" />]}
            />
          </p>

          <hr className="hr" />

          {error && <Message type="error">{t('form_sign_in_error')}</Message>}

          {isLoading && (
            <div className="padding text_center">
              <SpinnersLoading />
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <TextInput
              id="email"
              icon={faAt}
              register={register}
              error={!!errors.email}
              required={{
                required: true,
                showTextRequired: false
              }}
              pattern={emailRegex}
            />

            <TextInput
              type="password"
              id="password"
              icon={faLock}
              register={register}
              error={!!errors.password}
              required={{
                required: true,
                showTextRequired: false
              }}
            />

            <CheckBox id="remember" register={register} error={!!errors.remember} />

            <Button
              type="button"
              color="primary"
              typeButton="submit"
              fullWidth
              disabled={isLoading}
              ariaLabel={t('form_sign_in_submit')}
            >
              {t('form_sign_in_submit')}
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};
