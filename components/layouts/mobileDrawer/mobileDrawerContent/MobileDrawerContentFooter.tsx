import { ChangeLang } from '../../ChangeLang';
import { ChangeDark } from '../../userBar/ChangeDark';

export const MobileDrawerContentFooter = () => {
  return (
    <div className="mobileDrawer_content_footer">
      <ChangeDark />
      <ChangeLang showMobile />
    </div>
  );
};
