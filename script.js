let currentGame = null;
let currentLevel = null;

// 🎮 Game start function
function startGame(level){
  currentLevel = level;

  let games = GAME_DATA[level];

  // random puzzle select
  let randomIndex = Math.floor(Math.random() * games.length);
  currentGame = games[randomIndex];

  generateBoard();
}

// 🧱 Board create karna
function generateBoard(){
  const board = document.getElementById("board");
  board.innerHTML = "";

  for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){

      let input = document.createElement("input");
      input.classList.add("cell");

      let value = currentGame.puzzle[i][j];

      if(value !== ""){
        input.value = value;
        input.disabled = true;
        input.classList.add("fixed");
      }

      input.id = i + "-" + j;

      board.appendChild(input);
    }
  }
}
