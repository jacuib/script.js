const { Console } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (Jacui) => {
  console.log(`Hello ${Jacui}!`);
  rl.close();
});
