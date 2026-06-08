console.log("Hello Guys! let's play the rock-paper-scissors game!");

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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    console.log(`Human Choice: ${humanChoice} || Computer Choice: ${computerChoice}`);
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
}

for(i = 1; i <= 5; i++){
    console.log(`Round ${i}`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human Score : ${humanScore} || Computer Score : ${computerScore}`);
}

if(humanScore == computerScore){
    console.log('The Game is Tied');
}else if(humanScore > computerScore){
    console.log('Human Wins!');
}else{
    console.log('Computer Wins!');
}

