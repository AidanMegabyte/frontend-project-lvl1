#!/usr/bin/env node
import { generateRandomNumber, getYesNoAnswer, startGame } from '../src/index.js';
import isEven from '../src/games/even.js';

startGame(
  'Answer "yes" if the number is even, otherwise answer "no".',
  generateRandomNumber,
  (number) => getYesNoAnswer(isEven(number)),
);
