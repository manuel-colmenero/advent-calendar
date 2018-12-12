const KEY = 'advent-calendar';

export const load = defaults => {
  const stored = localStorage.getItem(KEY);
  if (stored === null) {
    return defaults;
  }

  let storedState = null;
  try {
    storedState = JSON.parse(stored);
  } catch (error) {
    return defaults;
  }

  if (typeof storedState !== "object") {
    return defaults;
  }

  return {
    ...defaults,
    ...storedState,
  };
};

export const save = values => {
  localStorage.setItem(KEY, JSON.stringify(values));
};
