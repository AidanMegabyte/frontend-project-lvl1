#!/usr/bin/env node
import { startGame } from '../src/index.js';
import { generateProgressionString, getProgressionMissedItem } from '../src/games/progression.js';

startGame(
  'What number is missing in the progression?',
  generateProgressionString,
  getProgressionMissedItem,
);
