class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
  }

  setupBoard() {
    //const board = document.querySelector('.ttt');
    let board = document.getElementsByClassName(el);
    let boardPositions = [
      [0, 0], 
      [0, 1], 
      [0, 2], 
      [1, 0], 
      [1, 1], 
      [1, 2], 
      [2, 0], 
      [2, 1], 
      [2, 2]
    ];
    // board.setAttribute("ul")
    let ul = document.createElement("ul")

    

    boardPositions.forEach((pos) => {
      let li = document.createElement("li");
      li.innerText = pos;
      li.dataset.id = `${[pos]}`;
      ul.appendChild(li);
      board.appendChild(ul);
    });
  
    // DataTransfer.forEach((pos) => {
    //   let li = document.createElement(li);
    //   li.innerHTML = `${[pos]}`;
    //   let boardDiv = document.querySelector(`[data-id="${[pos]}"]`)
    //   boardDiv.append(li);
    // });
  }

  bindEvents() {

  }

  handleClick(e) {
  
  }
  // EventTarget#addEventListener(type, handler)

  makeMove(square) {

  }
}



// View.prototype.setupBoard = function() {
  
// }




module.exports = View;
