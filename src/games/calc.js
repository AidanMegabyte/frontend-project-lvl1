import { generateRandomNumber } from '../index.js';

export const generateExpression = () => {
  const ops = ['+', '-', '*'];
  const opLeft = generateRandomNumber();
  const opRight = generateRandomNumber();
  const opIndex = generateRandomNumber() % 3;
  return `${opLeft} ${ops[opIndex]} ${opRight}`;
};

export const calculateExpression = (expression) => {
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
