export const generateRandomNumber = () => (Math.floor(Math.random() * 100)) + 1;

export const getRightAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');
