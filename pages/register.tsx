import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import { useMutation } from 'react-query';
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSession } from 'next-auth/client';

import { Container } from '../components/layouts/Container';
import { SpinnersLoading } from '../components/loading/SpinnersLoading';
import { TextInput } from '../components/inputs/TextInput';
import { FormValuesTypes } from '../_utils/types/FormValuesTypes';
import { emailRegex } from '../_utils/regex';
import { Checkbox } from '../components/inputs/Checkbox';
import { Button } from '../components/Button';
import { Breadcrumb } from '../components/Breadcrumb';
import { Error } from '../components/Error';
import { useState } from 'react';
import { Message } from '../components/Message';

interface RegisterProps {
  name: string;
  email: string;
  password: string;
}

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValuesTypes>();
  const { t } = useTranslation('global');
  const [session, loading] = useSession();
  const [error, setError] = useState('');

  const { mutateAsync, isLoading, isError } = useMutation(
    async ({ name, email, password }: RegisterProps) => {
      const res = await fetch('/api/account/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });

      const body = await res.json();

      if (body?.error) {
        setError(body.error.id);
        console.log(error);
      }

      console.log('res', res);
      console.log('body', body);

      return res;
    }
  );

  const onSubmit: SubmitHandler<FormValuesTypes> = data => {
    mutateAsync({
      name: data.name,
      email: data.email,
      password: data.password
    });
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
        <Breadcrumb>{t('navigation_register')}</Breadcrumb>
        <Error code="1C101/5">{t('error_already_logged')}</Error>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Breadcrumb>{t('navigation_register')}</Breadcrumb>
        <Error code="5C101/1" />
      </>
    );
  }

  return (
    <Container small>
      <div className="box padding">
        <div className="container_title">
          <h1 className="title title_h1">{t('page_title_sign_up')}</h1>
          <p>
            <Trans
              i18nKey="global:page_desc_sign_up"
              components={[<Link href="/login" key="page_desc_sign_up" />]}
            />
          </p>

          <hr className="hr" />

          {error && <Message type="error">{t(`form_sign_up_${error}`)}</Message>}

          {isLoading && (
            <div className="padding text_center">
              <SpinnersLoading />
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <TextInput
              id="name"
              register={register}
              error={!!errors.name}
              required={{
                required: true,
                showTextRequired: false
              }}
            />

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

            <TextInput
              id="repeatPassword"
              register={register}
              error={!!errors.repeatPassword}
              required={{
                required: true,
                showTextRequired: false
              }}
            />

            <Checkbox id="terms" register={register}>
              <Trans
                i18nKey="global:input_checkbox_label_terms"
                components={[
                  <Link href="/terms" key="input_checkbox_label_terms_1" />,
                  <Link href="/privacy" key="input_checkbox_label_terms_2" />
                ]}
              />
            </Checkbox>

            <Button type="button" color="primary" typeButton="submit" fullWidth disable={isLoading}>
              {t('form_sign_up_submit')}
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default RegisterPage;
