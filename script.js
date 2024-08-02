const createPlayer = function(name,mark){ 
    return{name,mark}
}


const player1 = createPlayer('Sulaiman','X')
const player2 = createPlayer('Karen','O')
const gamingInterface = (function(){
    const gridBoxes = document.querySelectorAll('.grid-box');
    let playerTurn = player1.mark;
    gridBoxes.forEach((grid) =>{
        grid.addEventListener('click', ()=>{
            if(playerTurn === player1.mark){
                grid.innerHTML = player1.mark;
                playerTurn = player2.mark;
            }
            else{
                grid.innerHTML = player2.mark;
                playerTurn = player1.mark; 
            }
        })
    })
})()




const gameBoard = {
    board: ['','','','','','','','','']
}


const checkWinning = () =>{
    const winningLogic = [
        [0,1,2],[3,4,5],[6,7,8], //rows
        [0,3,6],[1,4,7],[4,5,8], //columns
        [2,4,6],[0,4,8]          //diagonals
    ]
    //checks if the board is full to avoid giving draw result when the game is not over
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



