import useTranslation from 'next-translate/useTranslation';
import { useAuth } from '../../../../context/useAuth';
import { Button } from '../../../Button';
import { SpinnersLoading } from '../../../loading/SpinnersLoading';

export const MobileDrawerContentHeader = () => {
  const { t } = useTranslation('global');
  const { session, loading } = useAuth();

  return (
    <div className="mobileDrawer_content_header">
      {loading ? (
        <div className="text_center">
          <SpinnersLoading />
        </div>
      ) : (
        <>
          {session ? (
            <div className="mobileDrawer_content_header_auth">
              <div className="mobileDrawer_content_header_auth_name">
                <span>{t('drawer_mobile_signed_in_as')}</span>
                <p>{session.user.name}</p>
              </div>
            </div>
          ) : (
            <>
              <Button type="link" href="/login" color="light" ariaLabel={t('userbar_button_login')}>
                {t('userbar_button_login')}
              </Button>

              <Button
                type="link"
                href="/register"
                color="primary"
                ariaLabel={t('userbar_button_register')}
              >
                {t('userbar_button_register')}
              </Button>
            </>
          )}
        </>
      )}
    </div>
  );
};
