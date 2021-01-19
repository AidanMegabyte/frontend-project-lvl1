#!/usr/bin/env node
import { generateRandomNumber, playGame } from '../src/index.js';

const generateExpression = () => {
  const ops = ['+', '-', '*'];
  const opLeft = generateRandomNumber();
  const opRight = generateRandomNumber();
  const opIndex = generateRandomNumber() % 3;
  return `${opLeft} ${ops[opIndex]} ${opRight}`;
};

const calculateExpression = (expression) => {
  const [opLeft, op, opRight] = expression.split(' ');
  let result;
  if (op === '+') {
    result = Number(opLeft) + Number(opRight);
  } else if (op === '-') {
    result = Number(opLeft) - Number(opRight);
  } else {
    result = Number(opLeft) * Number(opRight);
  }
  return String(result);
};

playGame(
  'What is the result of the expression?',
  generateExpression,
  calculateExpression,
);
