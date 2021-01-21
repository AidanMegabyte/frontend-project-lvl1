import promptly from 'promptly';

export const sayWelcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const readUserName = async () => {
  const result = await promptly.prompt('May I have your name? ');
  return result;
};

export const sayHello = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export const sayGoalOfGame = (goalOfGame) => {
  console.log(goalOfGame);
};

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const readUserAnswer = async () => {
  const result = await promptly.prompt('Your answer: ');
  return result;
};

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
