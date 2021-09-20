import { faAt, faCheckCircle, faLock } from '@fortawesome/free-solid-svg-icons';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useState } from 'react';
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

type RegisterProps = {
  name: string;
  email: string;
  password: string;
};

export const RegisterView = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors }
  } = useForm<FormValuesTypes>();
  const { t } = useTranslation('global');
  const { session, loading } = useAuth();
  const [errorCode, setErrorCode] = useState('');

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    async ({ name, email, password }: RegisterProps) => {
      setErrorCode('');

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
        if (body.error.id === '1C101/4') {
          setError('email', {});
        } else if (body.error.id === '1C101/6') {
          setError('name', {});
        }

        setErrorCode(body.error.id);
      }

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

  if (isSuccess && !errorCode) {
    return (
      <MessageBox
        small
        titleShow={false}
        icon={faCheckCircle}
        description={t('form_sign_up_success_p')}
        buttons={
          <Button type="link" href="/login" color="primary" ariaLabel={t('form_sign_in_submit')}>
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

          {errorCode && <Message type="error">{t(`form_sign_up_${errorCode}`)}</Message>}

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
            >
              {!!errors.name && t('form_sign_up_1C101/6')}
            </TextInput>

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
            >
              {!!errors.email && t('form_sign_up_1C101/4')}
            </TextInput>

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
              {!!errors.repeatPassword && t('input_box_label_repeatPassword_error')}
            </TextInput>

            <CheckBox
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
            </CheckBox>

            <Button
              type="button"
              color="primary"
              typeButton="submit"
              fullWidth
              disabled={isLoading}
              ariaLabel={t('form_sign_up_submit')}
            >
              {t('form_sign_up_submit')}
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};
