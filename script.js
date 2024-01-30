const choices = document.querySelectorAll(".choice");
const userScore = document.querySelector("#userscore");
const dis = document.querySelector("#display");
const botScore = document.querySelector("#botscore"); 
const botChoice = document.querySelector("#botdis"); 
let userScoreCount = 0;
let botScoreCount = 0;

const resetGame = () => {
    userScoreCount = 0;
    botScoreCount = 0;
    userScore.innerHTML = userScoreCount;
    botScore.innerHTML = botScoreCount;
}

const showWinner = (userWins) => {
    if (userWins) {
        dis.innerHTML = "Congrats! You win.";
        userScoreCount++;
    } else {
        dis.innerHTML = "Bot wins!";
        botScoreCount++;
    }

    userScore.innerHTML = userScoreCount;
    botScore.innerHTML = botScoreCount;

    if (userScoreCount < 10 && botScoreCount === 10) {
        alert("Game Over. You lost the match!");
        resetGame();
    } else if (botScoreCount < 10 && userScoreCount === 10) {
        alert("Game Over. You won the match!");
        resetGame();
    }
}

const drawGame = () => {
    dis.innerHTML = "Draw!";
}

const getCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const playGame = (userChoice) => {
    setTimeout(() => {
        hideDiv();
        const compChoice = getCompChoice();
        botChoice.innerHTML = compChoice;
if(userChoice===compChoice){
    drawGame();   
}
else{
userWins=true;
 if(userChoice==="rock" && compChoice==="paper" || userChoice==="paper" && compChoice==="scissor" || userChoice==="scissor"){
     userWins=false;
}
showWinner(userWins);
}
   },2000);
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
       showDiv();
    });
});




function hideDiv() {
    
    var divToHide = document.querySelector('.thinking');

    
    if (divToHide) {
      divToHide.style.visibility = 'hidden';
    } 
  }




  function showDiv(){
    var divToShow = document.querySelector('.thinking');

    
    if (divToShow) {
      divToShow.style.visibility = 'visible';
    } 
  }
