#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
// import gradient from "gradient";
import chalkAnimation from "chalk-animation";
import gradient from "gradient-string";
import figlet from "figlet";
import createSpinner from "nanospinner";

// console.log('👋 - index')
// console.log(chalk.bgGreen('👋 - index'));


let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    `Who Wants To Be A Javascript Milionaire \n`
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.bgBlue('HOW TO PLAY')}
    I am a process on your computer.
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    So get all the questions right...
  `);

}


async function askName() {
  const answer = await inquirer.prompt({
    name: 'playername',
    type: 'input',
    message: 'What is your name?',
    default(){
      return 'Player';
    },
  });

  playerName = answer.player_name;
}


async function question1() {
  const answers = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: 'JavaScript was created in 10 days then released on\n',
    choices: [
      'May 23rd, 1995',
      'Nov 24th, 1995',
      'Dec 4th, 1995',
      'Dec 17th, 1996',
    ],
  });
  return handleAnswer(answers.question_1 == 'Dec 4th, 1995');
}

async function question2() {
  const answers = await inquirer.prompt({
    name: 'question_2',
    type: 'list',
    message: 'What is x? var x = 1_1 + "1" + Number(1)\n',
    choices: ['4', '"4"', '"1111"', '69420'],
  });
  return handleAnswer(answers.question_2 === '"1111"');
}

async function question3() {
  const answers = await inquirer.prompt({
    name: 'question_3',
    type: 'list',
    message: `What is the first element in the array? ['🐏', '🦙', '🐍'].length = 0\n`,
    choices: ['0', '🐏', '🐍', 'undefined'],
  });

  return handleAnswer(answers.question_3 === 'undefined');
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner('Checking answer...').start();
  await sleep;

  if (isCorrect) {
    spinner.success({ text: `Nice work ${playerName}`});
  } else {
    spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}`});
    process.exit(1);
  }

}

function winner() {
  console.clear();
  const msg = `Congrats , ${playerName} !\n $1,000,000`;

  figlet(msg, (err, data) => {
    console.log(gradient.pastel1.multiline(data));
  });
}


await welcome()
await askName();
await question1();
await question2();
await question3();
winner();
