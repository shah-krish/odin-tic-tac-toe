function createPlayer(name, marker){
    return {name, marker};
}
function createBoard(){
    const grid = [];
    for (let i = 0; i < 3; i++) {
      grid.push(new Array(3)); 
    }
    return grid;
}
function playGame(player1, player2){
    const board = createBoard();
    const whoseTurn = false; //false for p1, true for p2
    
}
const player1 = createPlayer("Krish",0);
console.log(player1)