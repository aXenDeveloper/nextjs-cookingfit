import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import { useMutation } from 'react-query';
import { faAt, faCheckCircle, faLock } from '@fortawesome/free-solid-svg-icons';
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
import { MessageBox } from '../components/MessageBox';
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
    getValues,
    formState: { errors }
  } = useForm<FormValuesTypes>();
  const { t } = useTranslation('global');
  const [session, loading] = useSession();
  const [error, setError] = useState('');

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    async ({ name, email, password }: RegisterProps) => {
      setError('');

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

      return body;
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
        <MessageBox code="1C101/5">{t('error_already_logged')}</MessageBox>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Breadcrumb>{t('navigation_register')}</Breadcrumb>
        <MessageBox code="5C101/1" />
      </>
    );
  }

  if (isSuccess) {
    return (
      <MessageBox
        small
        titleShow={false}
        icon={faCheckCircle}
        description={t('form_sign_up_success_p')}
        buttons={
          <Button type="link" href="/login" color="primary">
            {t('form_sign_in_submit')}
          </Button>
        }
      >
        {t('form_sign_up_success')}
      </MessageBox>
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
              type="password"
              id="repeatPassword"
              register={register}
              error={!!errors.repeatPassword}
              required={{
                required: false,
                showTextRequired: false
              }}
              validate={value => value === getValues('password')}
            >
              {!!errors.repeatPassword && t('input_text_label_repeatPassword_error')}
            </TextInput>

            <Checkbox
              id="terms"
              register={register}
              error={!!errors.terms}
              required={{
                required: true,
                showTextRequired: true
              }}
            >
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
