import { format } from 'date-fns'

export const getFormattedDate = (inputDate) => {
  if (!inputDate) {
    return;
  }

  const date = new Date(inputDate);

  return format(date, 'yyyy-MM-dd HH:mm');
}