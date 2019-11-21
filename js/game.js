let playerScore = 0
let computerScore = 0 //initialize player and computer scores
let computerSelection = () => {
    //Decide what the computer is going to do
    let sel = Math.random() *3
    sel = Math.ceil(sel);
    if(sel== 1) {
        return "rock";
    }else if (sel == 2) {
        return "paper";
    }else{
        return "scissors"
    };
};
let playButton = document.getElementById("play");
playButton.addEventListener("click", e => {
    let message = document.getElementById("displayMessage");
    function playerSelection() { // check what the player selected
        if(document.getElementById("rock").checked) {
            return "rock"
        }else if(document.getElementById("paper").checked) {
            return "paper"
        }else if(document.getElementById("scissors").checked) {
            return "scissors"
        }
    }
    //logic for who wins/text color
    if(playerSelection()=="rock") {
        if(computerSelection() == "paper") {
            computerScore++
            message.textContent= "You lose! Paper Beats Rock"
            message.style.color="red"
        }else if(computerSelection() == "scissors") {
            playerScore++
            message.textContent= "You Win! Rock Beats Scissors"
            message.style.color="green"
        }else{
            message.textContent= "You both Picked Rock"
            message.style.color="black";
        }
    }
    if(playerSelection()=="paper") {
        if(computerSelection() == "rock") {
            playerScore++
            message.textContent= "You Win! Paper Beats Rock"
            message.style.color="green"
        }else if(computerSelection() == "scissors") {
            computerScore++
            message.textContent= "You lose! Scissors Beats Paper"
            message.style.color="red"
        }else{
            message.textContent= "You both Picked Paper"
            message.style.color="black";

        }
    }
    if(playerSelection()=="scissors") {
        if(computerSelection() == "rock") {
            computerScore++
            message.textContent= "You lose! Rock Beats Scissors"
            message.style.color="red"
        }else if(computerSelection() == "paper") {
            playerScore++
            message.textContent= "You Win! Scissors Beats Paper"
            message.style.color="green"
        }else{
            message.textContent= "You both Picked Scissors"
            message.style.color="black";

        }
    }
    let score = document.getElementById("score"); 
    score.textContent = `You: ${playerScore} Computer: ${computerScore}`;//set and update score for player/computer
    if(playerScore> computerScore) {
        score.style.color = "green"
    }else if(playerScore < computerScore) {
        score.style.color = "red"
    }else{
        score.style.color = "black"
    }
});