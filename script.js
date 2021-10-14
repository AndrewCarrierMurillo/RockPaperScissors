

// Creating variable for 'content' div in body.
const content = document.getElementById('content');

// Creating buttons for rock, paper, or scissors. 
const rockButton = document.createElement('button');
rockButton.textContent = "rock";

const paperButton = document.createElement('button');
paperButton.textContent = "paper";

const scissorsButton = document.createElement('button');
scissorsButton.textContent = "scissors";

// Appending buttons to 'content' div in body.
content.appendChild(rockButton);
content.appendChild(paperButton);
content.appendChild(scissorsButton);


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

    let playerScore = 0;
    let computerScore = 0;

    function round(computerSelection, playerSelection) {
        let player = playerSelection;
        let computer = computerSelection;
    
        if (player === "rock" && computer === "rock") {
            console.log("Tie. Rock and Rock.");
        } else if (player === "rock" && computer === "paper") {
            computerScore++;
            console.log("You lose. Paper beats Rock.");
        } else if (player === "rock" && computer === "scissors") {
            playerScore++;
            console.log("You win. Rock beats Scissors.");
        } else if (player === "paper" && computer === "paper") {
            console.log("Tie. Paper and Paper.");
        } else if (player === "paper" && computer === "rock") {
            playerScore++;
            console.log("You win. Paper beats Rock.");
        } else if (player === "paper" && computer === "scissors") {
            computerScore++;
            console.log("You lose. Scissors beats Paper.");
        } else if (player === "scissors" && computer === "scissors") {
            console.log("Tie. Scissors and Scissors.");
        } else if (player === "scissors" && computer === "rock") {
            computerScore++;
            console.log("You lose. Rock beats Scissors.");
        } else {
            playerScore++;
            console.log("You win. Scissors beats Paper.");
        }
    }

    /*
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Enter rock, paper, or scissors: ");
        let playerSelection = userInput.toLowerCase();
        let computerSelection = computerPlay();
    
        while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
            userInput = prompt("Invalid selection. Input rock, paper, or scissors.");
            playerSelection = userInput.toLowerCase();
        }

        round(computerSelection, playerSelection);
    }
    */

    if (playerScore > computerScore) {
        console.log("You won! Congrats.");
    } else if (playerScore < computerScore) {
        console.log("You lost. Try again.");
    } else {
        console.log("Tied! Play again.")
    }
}

game();

