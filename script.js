// functionality var declarations 

let playerChoice, compChoice, playerScore, compScore, winnerText;

playerScore = 0;
compScore = 0;

// dom variable declarations
let playerChoiceIcon, compChoiceIcon, cardsContent, rock, paper, scissors, userSelected, compSelected, promptWinner, btnReset, userScoreDisplay, compScoreDisplay;

cardsAll = document.querySelectorAll('.card')
rock = document.querySelector('.card-rock');
paper = document.querySelector('.card-paper');
scissors = document.querySelector('.card-scissors');
userSelected = document.querySelector('.user-selected');
compSelected = document.querySelector('.comp-selected');
promptWinner = document.querySelector('.prompt-winner')
btnReset = document.querySelector('.btn-newGame');
userScoreDisplay = document.querySelector('.user-score');
compScoreDisplay = document.querySelector('.comp-score');

rock.addEventListener('click', () => {
  playerChoice = 1;
  userSelected.classList.remove('show-paper', 'show-scissors');
  userSelected.classList.add('show-rock');
  playGame();
  console.log('clicked');
});
paper.addEventListener('click', () => {
  playerChoice = 2;
  userSelected.classList.remove('show-rock', 'show-scissors');
  userSelected.classList.add('show-paper')
  playGame();
});
scissors.addEventListener('click', () => {
  playerChoice = 3;
  userSelected.classList.remove('show-rock', 'show-paper');
  userSelected.classList.add('show-scissors')
  playGame();
}); 


function playRound() { 
  compChoice = Math.ceil(Math.random() * 3);
  
  // comp selection icon;

  if(compChoice === 1) {
    compSelected.classList.remove('show-paper', 'show-scissors');
    compSelected.classList.add('show-rock');
  } else if (compChoice === 2) {
    compSelected.classList.remove('show-rock', 'show-scissors');
    compSelected.classList.add('show-paper')
  } else {
    compSelected.classList.remove('show-rock', 'show-paper');
    compSelected.classList.add('show-scissors')
  }

  if (playerChoice === compChoice) {
    promptWinner.textContent = 'It\'s a tie!!'
  } else if ( 
    (playerChoice === 1 && compChoice === 2) ||
    (playerChoice === 2 && compChoice === 3) ||
    (playerChoice === 3 && compChoice === 1) 
  ) {
    promptWinner.textContent = 'The Computer Wins!';
    compScore++;
  } else if (
    (playerChoice === 2 && compChoice === 1) ||
    (playerChoice === 1 && compChoice === 3) ||
    (playerChoice === 3 && compChoice === 2)
  ) {
    playerScore++;
    promptWinner.textContent = 'Congrats You Win!'; 
  }
  updateScore();  
}

function playGame() {
  if (playerScore === 3) {
   alert('Congrats! You beat the computer!');
   resetScore();
}

  if (compScore === 3) {
    alert('Sorry! The computer beat you!');
    resetScore();
}
  playRound();
}

function updateScore() {
  switch(playerScore) {
    case 1: 
      userScoreDisplay.textContent = '1';
      break;
    case 2:
      userScoreDisplay.textContent = '2';
      break;
    case 3:
      userScoreDisplay.textContent = '3';
      break;  
  }

  switch(compScore) {
    case 1: 
      compScoreDisplay.textContent = '1';
      break;
    case 2:
      compScoreDisplay.textContent = '2';
      break;
    case 3:
      compScoreDisplay.textContent = '3';
      break;  
  }

}

// function to reset the score to 0
function resetScore() {
  compSelected.classList.remove('show-rock','show-paper', 'show-scissors');
  playerScore = 0;
  compScore = 0;
  userScoreDisplay.textContent = '0';
  compScoreDisplay.textContent = '0';
} 

btnReset.addEventListener('click', () => {
  resetScore();
});




