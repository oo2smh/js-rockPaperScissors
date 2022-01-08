    
    // // var declaration ✅
    // let playerSelection, computerSelection, playerScore, computerScore;
    // playerScore = 0;
    // computerScore = 0; 
    
    // function userInput() {
    //   // prompt the user for their selection & save their answer in a variable  ✅
    //   // if the user types anything else, prompt them to try again! ✅
    //   playerSelection = prompt('Do you want to play rock, paper or scissors? Type either rock, paper or scissors');

    //   while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
    //     playerSelection = prompt('Try Again!');
    //   }

    //   // lowercases playerSelection
    //   playerSelection = playerSelection.toLowerCase();

    //   // convert user's response to a number
    //   switch(playerSelection) {
    //     case 'rock': 
    //       playerSelection = 1;
    //       break;
    //     case 'paper': 
    //       playerSelection = 2;
    //       break;
    //     case 'scissors':
    //       playerSelection = 3;
    //       break;
    //   }
    // }

    // // function computerPlay
    //   // computerSelection starts at 0, have the computer randomly select 1-3 (1 = rock, 2 = paper, 3 = scissors)
    // function oneRound() {
    //   userInput();
    //   computerSelection = Math.ceil(Math.random() * 3);
    //   if (computerSelection === playerSelection) {
    //     return `It's a tie!`
    //   } else if (computerSelection === 1 && playerSelection === 2) {
    //     ++playerScore;
    //     return `You win!`;
    //   } else if (computerSelection === 2 && playerSelection === 1) {
    //     ++computerScore;
    //     return 'You lose!';
    //   } else if (computerSelection === 1 && playerSelection === 3) {
    //     ++computerScore;
    //     return 'You lose!';
    //   } else if (computerSelection === 3 && playerSelection === 1) {
    //     ++playerScore;
    //     return 'You win!';
    //   } else if (computerSelection === 2 && playerSelection === 3) {
    //     ++playerScore;
    //     return 'You win'
    //   } else if (computerSelection === 3 && playerSelection === 2) {
    //     ++computerScore;
    //     return 'You lose';
    //   }
    // }

    // function game() {

    //   // checks playerScore && computerScore to see if there's a 2. If it's less than 2 continue playing the game. 
    //   while (playerScore < 2 && computerScore < 2) {
    //     oneRound();
    //   } 
    //   if (playerScore === 2) {
    //     alert('Congrats! You win!');
    //   } else if (computerScore === 2) {
    //     alert('You lose loser');
    //   }
    // }
     
    // game();