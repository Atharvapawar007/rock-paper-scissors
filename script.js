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

let Hscore = 0;
let Cscore = 0

const humanScore = document.querySelector(".humanScore");
const computerScore = document.querySelector(".computerScore");

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const humanChoice = document.querySelector(".humanChoice");
const computerChoice = document.querySelector(".computerChoice");

const winner = document.querySelector(".winner");

rockBtn.addEventListener("click", () => {
    humanChoice.innerText = "rock";
    let compChoice = getComputerChoice();
    computerChoice.innerText = compChoice;

    playRound("rock", compChoice);
});

paperBtn.addEventListener("click", () => {
    humanChoice.innerText = "paper";
    let compChoice = getComputerChoice();
    computerChoice.innerText = compChoice;

    playRound("paper", compChoice);
});

scissorsBtn.addEventListener("click", () => {
    humanChoice.innerText = "scissors";
    let compChoice = getComputerChoice();
    computerChoice.innerText = compChoice;

    playRound("scissors", compChoice);
});

function playRound(Hchoice, Cchoice){
    
    switch(Hchoice){
        case "rock":
            switch(Cchoice){
                case "paper":
                    Cscore++; break;
                case "scissors":
                    Hscore++; break;
            }
            break;

        case "paper":
            switch(Cchoice){
                case "scissors":
                    Cscore++; break;
                case "rock":
                    Hscore++; break;
            }
            break;

        case "scissors":
            switch(Cchoice){
                case "rock":
                    Cscore++; break;
                case "paper":
                    Hscore++; break;
            }
            break;
    }

    if(Hscore == 5 || Cscore == 5){
        let player = (Hscore === 5) ? "Human" : "Computer";
        winner.innerText = `The winner is ${player}!`;
        Hscore = 0;
        Cscore = 0;
        humanChoice.innerText = "";
        computerChoice.innerText = "";
    }

    humanScore.innerText = `${Hscore}`;
    computerScore.innerText = `${Cscore}`;
}