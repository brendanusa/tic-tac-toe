console.log('WELCOME TO TIC TAC TOE')

// board template with boxes labeled
const boardTemplate = ' --- --- --- \n| 1 | 2 | 3 |\n --- --- --- \n| 4 | 5 | 6 |\n --- --- --- \n| 7 | 8 | 9 |\n --- --- --- ';

// array containing state for empty board, to use at start of each game
let newGameState = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

// board to use during game
const gameBoard = ' --- --- --- \n| boardState[0] | boardState[1] | boardState[2] |\n --- --- --- \n| boardState[3] | boardState[4] | boardState[5] |\n --- --- --- \n| boardState[6] | boardState[7] | boardState[8] |\n --- --- --- ';




Game.prototype.checkForVictory = function() {

}

Game.prototype.move = function(boxNumber) {
  let playerMark = movesCompleted % 2 === 0 ? 'X' : 'O';
  this.gameState[boxNumber - 1] = playerMark;
  if (movesCompleted >= 5) {
    checkForVictory();
  }
}

var Game = function() {
  console.log(boardTemplate);

  // initialize blank board
  this.gameState = Array.from(newGameState);
  
  console.log('Enter the number of the box in which you would like to place your mark.\nPlayer 1:');

  // process.stdout.write('...');
  // process.stderr.write('...');

  // process.stdin.resume();

  // number of moves completed in this game
  this.movesCompleted = 0;

  process.stdin.setEncoding('utf8');

  process.stdin.on('data', function (text) {
    // read player moves here
    if (text.trim() === 'enhance') {

    }
    if (text.trim() === 'quit') {
      done();
    }
  });

  function done() {
   console.log('Goodbye!');
   process.exit();
  }
}

game();


// function stdin(fn) {
//   var data = '';

// }