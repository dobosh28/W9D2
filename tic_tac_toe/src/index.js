const View = require("./ttt-view.js");
const Game = require("../ttt_node/game.js");

// debugger

document.addEventListener("DOMContentLoaded", () => {
  const board = document.querySelector('.ttt');
  let game = new Game();
  new View(game, board);
  window.board = board;
  window.game = Game;
  window.view = View
  // debugger
  // tictac;
  
});

