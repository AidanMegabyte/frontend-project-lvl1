import readlineSync from 'readline-sync';

export const sayWelcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const readUserName = () => readlineSync.question('May I have your name? ');

export const sayHello = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export const readUserAnswer = () => readlineSync.question('Your answer: ');
