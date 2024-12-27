const icons = {
    Rock: '<div class="Rock"><div class="icon"></div></div>',
    Paper: '<div class="Paper"><div class="icon"></div></div>',
    Scissors: '<div class="Scissors"><div class="icon"></div></div>',
  };

let userScore = 0;
let computerScore = 0;

const userPick = (choice) => {
    if (choice === "Close button") {
        document.querySelector(".container1").style.display = "none";
        return;
    }
    if (choice === "rules button") {
        document.querySelector(".container1").style.display = "block";
        return;
    }

    document.querySelector(".gamearea").style.display = "none";
    document.querySelector(".afterpicking").style.display = "flex";

    
    document.querySelector(".userchoice").innerHTML = `<div class="${choice}"><div class="icon"></div></div>`;
    pickComputerChoice(choice);
    if (choice === "Paper") {
        document.querySelector(".userchoice").innerHTML = `<div class="Paper1"><div class="icon1"></div></div>`;
    }
    
};

const pickComputerChoice = (userChoice) => {
    const Choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = Choices[Math.floor(Math.random() * Choices.length)];

    document.querySelector(".pcchoice").innerHTML = `<div class="${computerChoice}"><div class="icon"></div></div>`;
    referee(userChoice, computerChoice);
    if (computerChoice === "Paper") {
        document.querySelector(".pcchoice").innerHTML = `<div class="Paper2"><div class="icon2"></div></div>`;
    }
};

const referee = (userChoice, cpChoice) => {
    if (
        (userChoice === "Rock" && cpChoice === "Scissors") ||
        (userChoice === "Paper" && cpChoice === "Rock") ||
        (userChoice === "Scissors" && cpChoice === "Paper")
    ) {
        setDecision("YOU WIN!");
        updateScore("user");
        if (userScore > computerScore) {
            document.querySelector(".nextbutton").style.display = "block";
        }
    } else if (userChoice === cpChoice) {
        setDecision("It's a tie!");
    } else {
        setDecision("YOU LOSE!");
        updateScore("computer");
    }
};

const showWinnerPage = () => {
    document.querySelector(".afterpicking").style.display = "none";
    document.querySelector(".winner-page").style.display = "flex";
};

const setDecision = (decision) => {
    document.querySelector(".gameresult h1").innerText = decision;
};

const updateScore = (winner) => {
    if (winner === "user") {
        userScore++;
        document.querySelectorAll(".score .value")[1].innerText = userScore;
    } else {
        computerScore++;
        document.querySelectorAll(".score .value")[0].innerText = computerScore;
    }
};

document.querySelector(".nextbutton").addEventListener("click", () => {
    document.querySelector(".container").style.display = "none";
    showWinnerPage();
});

const restartGame = () => {
    document.querySelector(".winner-page").style.display = "none";
    document.querySelector(".afterpicking").style.display = "none";
    document.querySelector(".gamearea").style.display = "flex";
    document.querySelector(".gameresult h1").innerText = "";
    document.querySelector(".nextbutton").style.display = "none";
};

const restartGame1 = () => {
    location.reload();
};
