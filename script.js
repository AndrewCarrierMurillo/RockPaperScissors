let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let move = Math.floor(Math.random() * 3);

    if (move === 0) {
        return "rock";
    } else if (move === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function game() {
    function round(computerSelection, playerSelection) {
        let player = playerSelection.toLowerCase();
        let computer = computerSelection;
    
        if (player === "rock" && computer === "rock") {
            return "Tie. Rock and Rock.";
        } else if (player === "rock" && computer === "paper") {
            computerScore++;
            return "You lose. Paper beats Rock.";
        } else if (player === "rock" && computer === "scissors") {
            playerScore++;
            return "You win. Rock beats Scissors.";
        } else if (player === "paper" && computer === "paper") {
            return "Tie. Paper and Paper.";
        } else if (player === "paper" && computer === "rock") {
            playerScore++;
            return "You win. Paper beats Rock.";
        } else if (player === "paper" && computer === "scissors") {
            computerScore++;
            return "You lose. Scissors beats Paper.";
        } else if (player === "scissors" && computer === "scissors") {
            return "Tie. Scissors and Scissors.";
        } else if (player === "scissors" && computer === "rock") {
            computerScore++;
            return "You lose. Rock beats Scissors.";
        } else if (player === "scissors" && computer === "paper") {
            playerScore++;
            return "You win. Scissors beats Paper.";
        } else {
            return "Please choose either rock, paper, or scissors.";
        }
    }
}

for(let i = 0; i < 5; i++) {
    let userInput = prompt("Enter rock, paper, or scissors: ");
    let playerSelection = userInput.toLowerCase();

    while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        userInput = prompt("Invalid selection. Input rock, paper, or scissors.");
        playerSelection = userInput.toLowerCase();
    }
}


