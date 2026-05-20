// Consistent date formatting to avoid hydration errors
export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  // Use en-US locale consistently to avoid server/client mismatch
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const formatDateShort = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${month}/${day}/${year}`;
};

export const formatDateYear = (date: Date): string => {
  return date.getFullYear().toString();
};
