
const gameBoard = {
    board: ['','','','','','','','','']
}

const createPlayer = function(name,mark){
    return{name,mark}
}

const checkWinning = () =>{
    const winningLogic = [
        [0,1,2],[3,4,5],[6,7,8], //rows
        [0,3,6],[1,4,7],[4,5,8], //columns
        [2,4,6],[0,4,8]          //diagonals
    ]
    //checks if the board is full to avoid giving result when the game is not over
    const isBoardFull = gameBoard.board.every(cell => cell !== '');

    for (let i = 0; i < winningLogic.length; i++) {
        const [a, b, c] = winningLogic[i];
        if (gameBoard.board[a] && gameBoard.board[a] === gameBoard.board[b] && gameBoard.board[a] === gameBoard.board[c]) {
            return gameBoard.board[a] + ' wins';
        }
    }
    if(isBoardFull){
        return 'Draw, No Winner';
    }
    return 'Continue'
    
}




