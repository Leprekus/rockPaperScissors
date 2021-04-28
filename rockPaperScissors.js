let computerPlay = function(move){
    let move = ['🪨', '📃', '✂'];
    return move[Math.floor(Math.random()*move.length)];

}
console.log(computerPlay(move));

