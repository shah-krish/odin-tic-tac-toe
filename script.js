function createPlayer(name, marker){
    return {name, marker};
}
function createBoard(){
    const grid = new Array(9);
    for(let i = 0; i<grid.length; i++){
        grid[i] = -1;
    }
    return grid;
}
function hasWon(board, lastIndex){
    var marker = board[lastIndex];
    var col = -1;
    if(lastIndex%3==0){ //first column
        col = 0;
    }
    else if(lastIndex%3==1){ //second column
        col = 1;
    }
    else{ //third column
        col = 2;
    }
    var row = -1;
    if(lastIndex>5){
        row = 6;
    }
    else if(lastIndex>2){
        row = 3;
    }
    else{
        row = 0;
    }
    var horizontal = horizontalCheck(board, row); 
    var vertical = verticalCheck(board, col);
    var diagonal = diagonalCheck(board);
    return horizontal || vertical || diagonal;
}
function verticalCheck(board, index){
    return board[index] === board[index + 3] && board[index] === board[index + 6];
}
function horizontalCheck(board, index){
    return board[index] === board[index + 1] && board[index] === board[index + 2];
}
function diagonalCheck(board){
    return (board[0] === board[4] && board[0] === board[8]) ||
    (board[2] === board[4] && board[2] === board[6]);
}
function playGame(player1, player2){
    const board = createBoard();
    var whoseTurn = false; //false for p1, true for p2
    let player = player1;
    while(true){
        if(whoseTurn == false){
            player = player1;
        }
        else{
            player = player2;
        }
        while(true){
            var index = prompt(player.name + " which index?");
            if(board[index]===-1){
                board[index] = player.marker;
                break;
            }
        }
        if(hasWon(board ,index)){
            console.log(player.name + " has won!");
            break;
        }
        whoseTurn = !whoseTurn;
    }
}
const player1 = createPlayer("Krish",0);
const player2 = createPlayer("Opponent",1);
/* console.log(player1);
console.log(player2); */
playGame(player1, player2);