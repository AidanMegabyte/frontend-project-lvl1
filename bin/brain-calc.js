#!/usr/bin/env node
import { startGame } from '../src/index.js';
import { generateExpression, calculateExpression } from '../src/games/calc.js';

startGame(
  'What is the result of the expression?',
  generateExpression,
  calculateExpression,
);
