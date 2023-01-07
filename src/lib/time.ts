export const monthDay = () => {
  const today = new Date()

  const formatter = new Intl.DateTimeFormat('en-us', {
    day: 'numeric',
    month: 'long',
  });

  return formatter.format(today);
}

export const dateString = () => {
  const today = new Date()

  const formatter = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });

  return formatter.format(today);
}

export const yearString = () => {
  const today = new Date()

  const formatter = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric'
  });

  return formatter.format(today);
}

