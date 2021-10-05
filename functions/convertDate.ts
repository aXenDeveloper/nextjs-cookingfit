export const convertTimeTo12H = (hours: number, minutes: number) => ({
  hours: hours >= 12 ? hours - 12 : hours,
  minutes
});

const convertDateToWeek = (day: number) => {
  switch (day + 1) {
    case 1:
      return 'monday';
    case 2:
      return 'tuesday';
    case 3:
      return 'wednesday';
    case 4:
      return 'thursday';
    case 5:
      return 'friday';
    case 6:
      return 'saturday';
    case 7:
      return 'sunday';
  }
};

const checkAMOrPM = (date: Date) => (date.getHours() >= 12 ? 'PM' : 'AM');

const convertTime = (seconds: number, type: 'minutes' | 'hours' | 'days' | 'months') => {
  const secondsFromType = {
    minutes: 60,
    hours: 3600,
    days: 86400,
    months: 2592000
  };

  return Math.floor(seconds / secondsFromType[type]);
};

export const convertDate = (date: number) => {
  const dateFromUNIX = new Date(date * 1000);
  const nowDate = Math.floor(new Date().getTime() / 1000);
  const seconds = nowDate - date;

  if (seconds < 60) {
    return {
      value: 0,
      type: 'seconds'
    };
  }

  if (seconds < 3600) {
    return {
      value: convertTime(seconds, 'minutes'),
      type: 'minutes'
    };
  }

  if (seconds < 86400) {
    return {
      value: convertTime(seconds, 'hours'),
      type: 'hours'
    };
  }

  if (seconds < 172800) {
    return {
      value: dateFromUNIX.getDate(),
      hours: dateFromUNIX.getHours(),
      minutes: dateFromUNIX.getMinutes(),
      ampm: checkAMOrPM(dateFromUNIX),
      type: 'yesterday'
    };
  }

  if (seconds < 604800) {
    return {
      value: dateFromUNIX.getDate(),
      hours: dateFromUNIX.getHours(),
      minutes: dateFromUNIX.getMinutes(),
      ampm: checkAMOrPM(dateFromUNIX),
      type: convertDateToWeek(dateFromUNIX.getDay())
    };
  }

  if (seconds < 31536000) {
    return {
      value: dateFromUNIX.getMonth(),
      day: dateFromUNIX.getDate(),
      hours: dateFromUNIX.getHours(),
      minutes: dateFromUNIX.getMinutes(),
      type: 'months'
    };
  }

  return {
    value: date,
    hours: dateFromUNIX.getHours(),
    minutes: dateFromUNIX.getMinutes(),
    ampm: checkAMOrPM(dateFromUNIX),
    type: 'unix'
  };
};
