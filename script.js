

// function returns computers turn based on if variable equals 0, 1, or 2.
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

// function takes in user input, lowercases it to normalize string, and compares to computer choice, returning result of single game.
function round(computerSelection, playerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection;

    if (player === "rock" && computer === "rock") {
        return "Tie. Rock and Rock.";
    } else if (player === "rock" && computer === "paper") {
        return "You lose. Paper beats Rock.";
    } else if (player === "rock" && computer === "scissors") {
        return "You win. Rock beats Scissors.";
    } else if (player === "paper" && computer === "paper") {
        return "Tie. Paper and Paper.";
    } else if (player === "paper" && computer === "rock") {
        return "You win. Paper beats Rock.";
    } else if (player === "paper" && computer === "scissors") {
        return "You lose. Scissors beats Paper.";
    } else if (player === "scissors" && computer === "scissors") {
        return "Tie. Scissors and Scissors.";
    } else if (player === "scissors" && computer === "rock") {
        return "You lose. Rock beats Scissors.";
    } else if (player === "scissors" && computer === "paper") {
        return "You win. Scissors beats Paper.";
    } else {
        return "Please choose either rock, paper, or scissors.";
    }

}

playerSelection = "safsddsf";
computerSelection = computerPlay();

console.log(round(computerSelection, playerSelection));

// function that plays 5 rounds of game and reports winner / loser at end.
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        
    }
}