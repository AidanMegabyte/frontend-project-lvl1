#!/usr/bin/env node
import { generateRandomNumber, playGame } from '../src/index.js';

const getRightAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

playGame(
  'Answer "yes" if the number is even, otherwise answer "no".',
  generateRandomNumber,
  getRightAnswer,
);
