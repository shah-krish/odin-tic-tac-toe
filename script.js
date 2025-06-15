function createPlayer(name){
    return {name};
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
}