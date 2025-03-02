
let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const computerscorepara=document.querySelector("#computer-score");

const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

const drawGame = () => {
   
    msg.innerText = "Game draw,play again";
    msg.style.backgroundColor=" #081b31";
}

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userscorepara.innerText=userScore;  // Increment user score if the user wins
        
        msg.innerText = "You win!";
        msg.style.backgroundColor="green";
    } else {
        computerScore++; 
        computerscorepara.innerText=computerScore;
         // Increment computer score if the computer wins
       
        msg.innerText = "You lose!";
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) => {
    console.log("User  choice =", userChoice);
    const computerChoice = generateComputerChoice();
    console.log("Computer choice =", computerChoice);
    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = false; // Default to false
        if (userChoice === "rock") {
            userWin = computerChoice === "scissors"; // Rock beats scissors
        } else if (userChoice === "paper") {
            userWin = computerChoice === "rock"; // Paper beats rock
        } else if (userChoice === "scissors") {
            userWin = computerChoice === "paper"; // Scissors beats paper
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked:", userChoice);
        playGame(userChoice); // Pass userChoice to playGame
    });
});