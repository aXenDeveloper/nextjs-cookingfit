import { FC } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { convertDate, convertTimeTo12H } from '../functions/convertDate';

interface Props {
  date: number;
}

export const DateFormat: FC<Props> = ({ date }) => {
  const { t } = useTranslation('global');
  const { locale } = useRouter();
  const convertDateFromUNIX = convertDate(date);

  const currentTime12H = convertTimeTo12H(
    convertDateFromUNIX.hours ?? 0,
    convertDateFromUNIX.minutes ?? 0
  );

  const getDataFromUNIX = () => {
    const currentDate = new Date(date * 1000);

    if (locale === 'pl') {
      return (
        <span>
          {currentDate.getDate()}.{currentDate.getMonth()}.{currentDate.getFullYear()}{' '}
          {currentDate.getHours()}:{currentDate.getMinutes()}
        </span>
      );
    }

    return (
      <span>
        {currentDate.getMonth()}/{currentDate.getDate()}/{currentDate.getFullYear()}{' '}
        {currentTime12H.hours}:{currentTime12H.minutes} {convertDateFromUNIX.ampm}
      </span>
    );
  };

  if (convertDateFromUNIX.type === 'unix') {
    return <span>{getDataFromUNIX()}</span>;
  }

  return (
    <span>
      {t(`date_format_ago_${convertDateFromUNIX.type}`, {
        count: convertDateFromUNIX.value,
        minutes: currentTime12H.minutes,
        hours: (locale === 'pl' ? convertDateFromUNIX.hours : currentTime12H.hours) ?? 0,
        ampm: convertDateFromUNIX.ampm ?? 0,
        day: convertDateFromUNIX.day ?? 0
      })}
    </span>
  );
};
