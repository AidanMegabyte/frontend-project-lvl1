#!/usr/bin/env node

import { generateRandomNumber, playGame } from '../../src/index.js';

const missedNumPlaceholder = '..';

const generateProgressionString = () => {
  const numsQty = (generateRandomNumber() % 16) + 5;
  let startNum = generateRandomNumber();
  const step = generateRandomNumber();
  const missedNumIndex = generateRandomNumber() % numsQty;
  const result = [];
  for (let i = 0; i < numsQty; i += 1) {
    result.push(i === missedNumIndex ? missedNumPlaceholder : startNum);
    startNum += step;
  }
  return result.join(' ');
};

const getProgressionMissedItem = (progressionString) => {
  const parts = progressionString.split(' ');
  const missedNumIndex = parts.indexOf(missedNumPlaceholder);
  const missedFirst = missedNumIndex === 0 ? -1 : 1;
  const prevIndex = missedNumIndex - 1;
  const step = missedNumIndex < 2 ? (+parts[3] - +parts[2]) : (+parts[1] - +parts[0]);
  return String(+parts[Math.abs(prevIndex)] + (missedFirst * step));
};

playGame(
  'What number is missing in the progression?',
  generateProgressionString,
  getProgressionMissedItem,
);
