const OUTPUT=document.querySelector('.output')

const ROCK=document.querySelector('#rock')
const PAPER=document.querySelector('#paper')
const SCISSORS=document.querySelector('#scissors')



let rock = '🪨';
let paper = '📃';
let scisssors = '✂';

let computerPlay = function(){
    let move = ['🪨', '📃', '✂'];
    return move[Math.floor(Math.random()*move.length)];

}

function game(playerSelection, computerSelection, turns){

  // define the function and call it on the do... while... loop
  let playRound = function(){ 
  if (playerSelection === '🪨' && computerSelection ==='📃'){
    return ('Player: ' + playerSelection + ' Computer: ' 
             + computerSelection + ' You lose Paper beats Rock! :(');
  }else{
    return 'Computer Chose: ' + computerSelection;
  }
  };

  for (let i= 0; i < turns; i++){
    return playRound();
  }

};
console.log(computerPlay());
console.log(game(rock, computerPlay(), 5));

