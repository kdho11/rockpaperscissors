function getUserChoice (userInput) {
    var userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput ===  "scissors" || userInput ===  "paper" || userInput === "bomb") {
        return userInput; 
    }
    else {
        console.log("You have not entered a valid input.")
    } 
}


function getComputerChoice() {
    
    var computerChoice = Math.floor(Math.random() * 3);
    
    if (computerChoice === 0) {
        return "rock";
    }
    else if (computerChoice === 1) {
        return "scissors";
    }
    else if (computerChoice === 2) {
        return "paper"
    }
}


function determineWinner(userChoice,computerChoice) {

    if (userChoice === computerChoice) {
        return "The game was a tie.";
    }
    
    if (userChoice === "bomb") {
        return "You won!";
    }
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "The computer won";
        }
        else {
            return "You won!"
        }
    }

    if (userChoice === "paper") {
        if (computerChoice === "rock") {
            return "You won!";
        }
        else {
            return "The computer won"
        }
    }

    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "The computer won.";
        }
        else {
            return "You won";
        }
        }
    }


function playGame() {
    var userChoice = getUserChoice('Bomb');
    console.log(userChoice);
    var computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
} 

playGame();
