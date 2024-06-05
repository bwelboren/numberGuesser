let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9);
}

const compareGuesses = (human, computer, target) => {
  human = Math.abs(human - target);
  computer = Math.abs(computer - target);
  return human < computer ? true : false;
}

const updateScore = winner => {
  winner === 'human' ? humanScore++ : computerScore++;
}

const advanceRound = () => {
  currentRoundNumber++;
}

const play = () => {
  const result = compareGuesses(6, 4, 6)
  result ? updateScore('human') : updateScore('computer')
}

play()
console.log("Human:", humanScore)
console.log("Computer:", computerScore)
