#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const isEven = (number) => number % 2 === 0;

const getRandomNum = (min = 1, max = 99) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const playEvenGame = () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNum();
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,);
      console.log(`Let's try again, ${name}!`);
      return;
    };
     console.log('Correct!');
  };
  console.log(`Congratulations, ${name}!`);
};

playEvenGame();

export default playEvenGame;