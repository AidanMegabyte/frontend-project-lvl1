#!/usr/bin/env node

import { generateRandomNumber, playGame } from '../../src/index.js';

const generateNumbersString = () => {
  const numLeft = generateRandomNumber();
  const numRight = generateRandomNumber();
  return `${numLeft} ${numRight}`;
};

const getGcd = (numbersString) => {
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

playGame(
  'Find the greatest common divisor of given numbers.',
  generateNumbersString,
  getGcd,
);
