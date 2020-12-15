export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const splitValueAndUnits = (cssString = '') => {
  // get numeric value and unit tag, return both seperately so we can
  // do math on the value and add the units back on afterwards
  let value = Number.parseInt(cssString);
  const unitRegex = /(?<=[0-9])(.[^0-9])$/g;

  const matches = unitRegex.exec(cssString);
  let unit = matches && matches[0];

  return { value, unit };
};