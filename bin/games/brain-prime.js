#!/usr/bin/env node

import { generateRandomNumber, playGame } from '../../src/index.js';

const getRightAnswer = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

playGame(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateRandomNumber,
  getRightAnswer,
);
