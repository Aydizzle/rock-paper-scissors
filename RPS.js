//1 = Rock
//2 = Paper
//3 = Scissors

let computerSelection;
let computerNumber;
let playerSelection;
const body = document.body;

const buttons = document.querySelectorAll('button');
const div = document.createElement('div');
div.textContent = "New Text";

buttons.forEach((button) => {
    button.addEventListener('click', e => {

        body.append(div);
    playRound(e);
    });
});

function computerPlay() {
    computerNumber = Math.ceil(Math.random()*3);
    if (computerNumber == 1) {
        computerSelection = "Rock";
    }
    if (computerNumber == 2) {
        computerSelection = "Paper";
    }
    else {
        computerSelection = "Scissors";
    }
}

function playRound (e) {

    computerPlay();
    playerSelection=(e.id);

    if (playerSelection == computerSelection) {
        return "It's a draw";
    }

    if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            return "You lose! Paper beats Rock"
        }
        else {
            return "You win! Rock beats Scissors"
        }
    }

    if (playerSelection == "Paper") {
        if (computerSelection == "Scissors") {
            return "You lose! Scissors beats Rock"
        }
        else {
            return "You win! Paper beats Rock"
        }
    }

    if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            return "You lose! Scissors beats Rock"
        }
        else {
            return "You win! Scissors beats Rock"
        }
    }

}



function game() {
    i = 0;
    draws = 0;
    pWins = 0;
    cWins = 0;
    while (i<5) {
        result = (playRound());
    
        if (result.charAt(0)=="I") {
            draws++;
        }
        if (result.charAt(4)=="w") {
            pWins++;
        }
        if (result.charAt(4)=="l") {
            cWins++;
        }
        console.log(result);
        i++;
    }
    console.log("You won " + pWins + " times.")
    console.log("You lost " + cWins + " times.")
    console.log("You drew " + draws + " times.")
}