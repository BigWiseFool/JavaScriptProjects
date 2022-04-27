const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Please input a valid option");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "something went wrong";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Game was a tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      return "User has won";
    }
    if (computerChoice === "paper") {
      return "Computer has won";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "User has won";
    }
    if (computerChoice === "scissors") {
      return "Computer has won";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      return "User has won";
    }
    if (computerChoice === "rock") {
      return "Computer has won";
    }
  }
};
const playGame = () => {
  const userChoice = getUserChoice("paper"); //user input
  const computerChoice = getComputerChoice();
  console.log("user input: " + userChoice);
  console.log("the computer input: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
