import {
  sayWelcome, readUserName, sayHello, sayGoalOfGame, askQuestion, readUserAnswer,
  sayAnswerIsRight, sayAnswerIsWrong, congratulateUser,
} from './cli.js';

export const generateRandomNumber = () => (Math.floor(Math.random() * 100)) + 1;

export const playGame = async (goalOfGame, generateQuestion, getRightAnswer) => {
  sayWelcome();
  const userName = await readUserName();
  sayHello(userName);
  sayGoalOfGame(goalOfGame);
  let rightAnswersQty = 0;
  for (let i = 0; i < 3; i += 1) {
    const question = generateQuestion();
    askQuestion(question);
    const actualUserAnswer = await readUserAnswer();
    const expectedUserAnswer = getRightAnswer(question);
    if (actualUserAnswer === expectedUserAnswer) {
      sayAnswerIsRight();
      rightAnswersQty += 1;
    } else {
      sayAnswerIsWrong(actualUserAnswer, expectedUserAnswer, userName);
      break;
    }
  }
  if (rightAnswersQty === 3) {
    congratulateUser(userName);
  }
};
