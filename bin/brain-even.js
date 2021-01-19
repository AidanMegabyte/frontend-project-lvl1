#!/usr/bin/env node
import {
  sayWelcome, readUserName, sayHello, readUserAnswer,
} from '../src/cli.js';
import { generateRandomNumber, getRightAnswer } from '../src/game.js';

sayWelcome();
const userName = readUserName();
sayHello(userName);
let rightAnswersQty = 0;
for (let i = 0; i < 3; i += 1) {
  const randomNumber = generateRandomNumber();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${randomNumber}`);
  const actualUserAnswer = readUserAnswer();
  const expectedUserAnswer = getRightAnswer(randomNumber);
  if (actualUserAnswer === expectedUserAnswer) {
    console.log('Correct!');
    rightAnswersQty += 1;
  } else {
    console.log(`'${actualUserAnswer}' is wrong answer ;(. Correct answer was '${expectedUserAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
}
if (rightAnswersQty === 3) {
  console.log(`Congratulations, ${userName}!`);
}
