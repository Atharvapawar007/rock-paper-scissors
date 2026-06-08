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