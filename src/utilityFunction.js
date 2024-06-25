const dateUtility = (timeStamp) => {
  const date = new Date(timeStamp);
  const localDate = date.toLocaleDateString();
  return localDate;
};
// utilityFunctions.js

export const getFormattedDate = (timestamp) => {
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const getFormattedTime = (timestamp) => {
  const date = new Date(timestamp);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

export const getDateLabel = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();

  const isSameDay = (d1, d2) => d1.toDateString() === d2.toDateString();
  const isYesterday = (d1, d2) => {
    const yesterday = new Date(d1);
    yesterday.setDate(yesterday.getDate() - 1);
    return isSameDay(yesterday, d2);
  };

  if (isSameDay(now, date)) {
    return 'Today';
  } else if (isYesterday(now, date)) {
    return 'Yesterday';
  } else {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(now.getDate() - 7);
    if (date > oneWeekAgo) {
      return daysOfWeek[date.getDay()];
    } else {
      return getFormattedDate(timestamp);
    }
  }
};

export default dateUtility;
