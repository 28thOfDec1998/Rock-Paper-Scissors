function getComputerChoice(){

    // Math.random() used with Math.floor() can be used to return random integers.
    // Check: https://www.w3schools.com/js/js_random.asp 
    // Math.floor(Math.random()*length.

    let computerChoice = Math.floor(Math.random()*3)

     if (computerChoice == 0){
        return 'rock'
     }

     else if (computerChoice == 1){
        return 'paper'
     }

     else if (computerChoice == 2){
        return 'scissors'
     }

}

function playRound(playerSelection, computerSelection) {

    console.log(playerSelection, computerSelection);

    if (playerSelection == computerSelection){
        return "Tie"
    }

    else if(playerSelection =='paper' && computerSelection == 'rock' ){
        return "You Won"
    }

    else if(playerSelection =='rock' && computerSelection == 'scissors' ){
        return "You Won"
    }

    else if(playerSelection =='scissors' && computerSelection == 'paper' ){
        return "You Won"
    }

    else{
        return "you lost gg"
    }
  }
   
  const playerSelection = prompt("Enter yor move").toLowerCase();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));