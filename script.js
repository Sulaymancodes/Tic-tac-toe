const createPlayer = function(name,mark){ 
    return{name,mark}
}

const player1 = createPlayer('Player-One','X')
const player2 = createPlayer('Player-Two','O')

const gameBoard = {
    board: ['','','','','','','','','']
}

let playerTurn = player1.mark;

const checkWinning = () =>{
    const winningLogic = [
        [0,1,2],[3,4,5],[6,7,8], //rows
        [0,3,6],[1,4,7],[2,5,8], //columns
        [2,4,6],[0,4,8]          //diagonals
    ]
    

    for (let i = 0; i < winningLogic.length; i++) {
        const [a, b, c] = winningLogic[i];
        if (gameBoard.board[a] && gameBoard.board[a] === gameBoard.board[b] && gameBoard.board[a] === gameBoard.board[c]) {
            return gameBoard.board[a] + ' wins';
        }
    }

    //checks if the board is full to avoid giving draw result when the game is not over
    const isBoardFull = gameBoard.board.every(cell => cell !== '');
    if(isBoardFull){
        return 'Draw, No Winner';
    }  
    return playerTurn + ` Turn`;
}

//update ScoredBoard 
const updateStatus = () => {
    const scoreBoard =  document.querySelector('.text-container');
    scoreBoard.innerText = checkWinning();
};

const resetGame = () =>{
    gameBoard.board = ['','','','','','','','',''];
    playerTurn = player1.mark;
    const gridBoxes = document.querySelectorAll('.grid-box');
    gridBoxes.forEach(grid => {
        grid.innerText = '';
    });

    // Update the status
    updateStatus();
}

const gamingInterface = (function(){

    const player1Name = document.querySelector('.player1name');
    const player1Mark = document.querySelector('.player1mark');
    const player2Name = document.querySelector('.player2name');
    const player2Mark = document.querySelector('.player2mark');
    const reset = document.querySelector('.reset');

    player1Name.innerText += player1.name;
    player1Mark.innerText += player1.mark;
    player2Name.innerText += player2.name;
    player2Mark.innerText += player2.mark;

    const gridBoxes = document.querySelectorAll('.grid-box');
    gridBoxes.forEach((grid) =>{
        grid.addEventListener('click', ()=>{
            const gridIndex = grid.getAttribute('data-index');
            if(checkWinning() !== 'X wins' && checkWinning() !== 'O wins'){
                if(grid.innerText === ''){
                    if(playerTurn === player1.mark){
                        grid.innerText = player1.mark;
                        gameBoard.board[gridIndex] = player1.mark;
                        playerTurn = player2.mark;
                    }
                    else{
                        grid.innerText = player2.mark;
                        gameBoard.board[gridIndex] = player2.mark;
                        playerTurn = player1.mark;
                    }
                    updateStatus();
                }
            }
        })
    })
    updateStatus();
    reset.addEventListener('click',resetGame);
})()











