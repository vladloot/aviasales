const minutesInHour: number = 60;

export const getTimeFromMins = (minutes: number): string => {
  const hours = Math.trunc(minutes / minutesInHour);
  const mins = minutes % minutesInHour;
  return `${hours}ч ${mins}м`;
};
