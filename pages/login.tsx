import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import { useForm, SubmitHandler } from 'react-hook-form';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

import Container from '../components/layouts/Container';
import { TextInput } from '../components/inputs/TextInput';
import { Button } from '../components/Button';
import { FormValuesTypes } from '../_utils/types/FormValuesTypes';

const LoginPage = () => {
  const { t } = useTranslation('global');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesTypes>();

  const onSubmit: SubmitHandler<FormValuesTypes> = (data) => console.log(data);

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

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              id='email'
              icon={faMailBulk}
              register={register}
              error={!!errors.email}
              required={{
                required: true,
                text: false,
              }}
            />
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

            <Button type='button' color='primary' typeButton='submit' fullWidth>
              {t('button_text_sign_in')}
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
