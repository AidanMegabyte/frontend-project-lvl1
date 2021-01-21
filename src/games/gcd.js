import { generateRandomNumber } from '../index.js';

export const generateNumbersString = () => {
  const numLeft = generateRandomNumber();
  const numRight = generateRandomNumber();
  return `${numLeft} ${numRight}`;
};

export const getGcd = (numbersString) => {
  const [numLeft, numRight] = numbersString.split(' ');
  let min = Math.min(numLeft, numRight);
  let max = Math.max(numLeft, numRight);
  // eslint-disable-next-line no-constant-condition
  while (true) {
    max %= min;
    if (max === 0) {
      return String(min);
    }
    min %= max;
    if (min === 0) {
      return String(max);
    }
  }
};
