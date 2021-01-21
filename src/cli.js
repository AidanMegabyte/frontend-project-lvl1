import readlineSync from 'readline-sync';

export const sayWelcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const readUserName = () => readlineSync.question('May I have your name? ');

export const sayHello = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export const sayGoalOfGame = (goalOfGame) => {
  console.log(goalOfGame);
};

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const readUserAnswer = () => readlineSync.question('Your answer: ');

export const sayAnswerIsRight = () => {
  console.log('Correct!');
};

export const sayAnswerIsWrong = (actualUserAnswer, expectedUserAnswer, userName) => {
  console.log(`'${actualUserAnswer}' is wrong answer ;(. Correct answer was '${expectedUserAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};

export const congratulateUser = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};
