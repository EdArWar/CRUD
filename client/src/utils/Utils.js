export function wordToUpperCase(str) {
  return str;
}

export const isNotEmpty = (obj) => {
  return !!obj && Object.keys(obj).length !== 0;
};

export const isEmpty = (obj) => {
  return !obj || !Object.keys(obj).length;
};
