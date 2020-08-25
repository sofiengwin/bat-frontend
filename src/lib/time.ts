export const monthDay = () => {
  const today = new Date()

  const formatter = new Intl.DateTimeFormat('en-us', {
    day: 'numeric',
    month: 'long',
  });

  return formatter.format(today);
}