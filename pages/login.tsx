import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';

import Container from '../components/layouts/Container';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { TextInput } from '../components/inputs/TextInput';

const LoginPage = () => {
  const { t } = useTranslation('global');

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

          <TextInput id='email' icon={faMailBulk} />
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
