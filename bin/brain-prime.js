#!/usr/bin/env node
import { generateRandomNumber, getYesNoAnswer, startGame } from '../src/index.js';
import isPrime from '../src/games/prime.js';

startGame(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateRandomNumber,
  (number) => getYesNoAnswer(isPrime(number)),
);
