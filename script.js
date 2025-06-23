function createPlayer(name, marker){
    return {name, marker};
}
function createBoard(){
    const grid = new Array(9).fill(-1);
    return grid;
}
function hasWon(board, lastIndex){
    var marker = board[lastIndex];
    var col = lastIndex % 3;
    var row = lastIndex - col;

    var horizontal = horizontalCheck(board, row); 
    var vertical = verticalCheck(board, col);
    var diagonal = diagonalCheck(board);
    return horizontal || vertical || diagonal;
}
function horizontalCheck(board, index){
    const start = index - (index % 3); 
    return board[start] !== -1 && board[start] === board[start + 1] && board[start] === board[start + 2];
}

function verticalCheck(board, index){
    return board[index] !== -1 &&
           board[index] === board[index + 3] &&
           board[index] === board[index + 6];
}

function diagonalCheck(board){
    return (board[0] !== -1 && board[0] === board[4] && board[0] === board[8]) ||
           (board[2] !== -1 && board[2] === board[4] && board[2] === board[6]);
}
function isEmpty(board, index) {
    return board[index] === -1;
}

const player1 = createPlayer("Krish", 0);
const player2 = createPlayer("Opponent", 1);
let currentPlayer = player1;
let gameOver = false;
const board = createBoard();

function buttonClick(board) {
    const buttons = document.querySelectorAll('.boardButton');
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            if (gameOver) return;

            const index = Number(this.getAttribute('data-value'));

            if (isEmpty(board, index)) {
                board[index] = currentPlayer.marker;
                this.textContent = currentPlayer.marker === 0 ? "X" : "O";

                if (hasWon(board, index)) {
                    const winner = document.querySelector(".winnerName");
                    winner.textContent = currentPlayer.name + " has won!";
                    gameOver = true;
                    return;
                }

                currentPlayer = currentPlayer === player1 ? player2 : player1;
            }
        });
    });
}
const reset = document.querySelector('.resetButton');
reset.addEventListener("click", function (){
    for(let i =0; i<board.length;i++){
        board[i] = -1;
    }
    const buttons = document.querySelectorAll('.boardButton');
    buttons.forEach(button =>{
        button.textContent = "";
    })
    gameOver = false;
    const winner = document.querySelector(".winnerName");
    winner.textContent = "";
})
buttonClick(board);

const p1 = document.querySelector(".p1Name");
p1.textContent = player1.name;
const p2 = document.querySelector(".p2Name");
p2.textContent = player2.name;