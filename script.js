console.log("Hello World");

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 100);

    if(randomNumber > 66){
        return "rock";
    }else if(randomNumber > 33){
        return "paper";
    }else{
        return "scissors";
    }
}

function getHumanChoice(){
    const humanChoice = prompt("Enter one option out of 'Rock', 'Paper' or 'Scissors' ");

    return humanChoice.toLowerCase();
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    switch(humanChoice){
        case "rock":
            if(computerChoice === "rock"){
                console.log("It's a tie!");
            }else if(computerChoice === "paper"){
                console.log("Computer wins!");
                computerScore++;
            }else{
                console.log("Human wins!");
                humanScore++;
            }
            break;

        case "paper":
            if(computerChoice === "paper"){
                console.log("It's a tie!");
            }else if(computerChoice === "scissors"){
                console.log("Computer wins!");
                computerScore++;
            }else{
                console.log("Human wins!");
                humanScore++;
            }
            break;

        case "scissors":
            if(computerChoice === "scissors"){
                console.log("It's a tie!");
            }else if(computerChoice === "rock"){
                console.log("Computer wins!");
                computerScore++;
            }else{
                console.log("Human wins!");
                humanScore++;
            }
            break;
    }

    console.log(`Human Score : ${humanScore} || Computer Score : ${computerScore}`);
}

