#!/usr/bin/env node
import { startGame } from '../src/index.js';
import { generateNumbersString, getGcd } from '../src/games/gcd.js';

startGame(
  'Find the greatest common divisor of given numbers.',
  generateNumbersString,
  getGcd,
);
