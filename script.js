// Pseudo code
/*  
    getComputerChoice()
    g
    getHumanChoice()
    playRound()
    playGame()
*/

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    function assignRPS(value) {
        if (value === 1) return 'rock';
        if (value === 2) return 'paper';
        return 'scissors';
    }

    return assignRPS(choice);
}

function getHumanChoice() {
    let input = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
    return input;
}

function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        return 'human';
    } else if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'paper' && humanChoice === 'rock') ||
        (computerChoice === 'scissors' && humanChoice === 'paper')
    ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        return 'computer';
    } else if (humanChoice === computerChoice) {
        console.log("It's a draw.");
        return 'draw';
    } else {
        console.log("Invalid input. Please enter rock, paper, or scissors.");
        return 'invalid';
    }
}

function playGame() {
    let humanscore = 0;
    let computerscore = 0;

    for (let i = 0; i < 5; i++) {
        let human = getHumanChoice();
        let computer = getComputerChoice();

        let result = playRound(human, computer);

        if (result === 'human') {
            humanscore++;
        } else if (result === 'computer') {
            computerscore++;
        } // draw or invalid don’t change score

        console.log(`Round ${i + 1} Results: Human - ${humanscore}, Computer - ${computerscore}`);
    }

    // Final game result
    console.log("Final Scores:");
    console.log("You:", humanscore);
    console.log("Computer:", computerscore);

    if (humanscore > computerscore) {
        console.log("You won the game!");
    } else if (computerscore > humanscore) {
        console.log("You lost the game.");
    } else {
        console.log("It's a draw!");
    }
}

playGame();
