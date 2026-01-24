const gameBoard = (function() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(cell())
        }
    }
    
    let getBoard = board;

    function placeToken() {
        //place players token in specific spot
    }

    function clearBoard() {
        //reset the board Board
    }

    function printBoard() {

    }

    return {
        getBoard,
        clearBoard,
        printBoard,
        placeToken
    }
})();

function cell() {
    let value = "";

    const addToken = (player) => {
        value = player;
    }

    const getValue = () => value;

    return {
        addToken,
        getValue
    }
}

function playGame() {
    const board = gameBoard.getBoard();
    
    const players = [
        {
            name: "Player X",
            token: "X",
            score: 0
        },
        {
            name: "Player O",
            token: "O",
            score: 0
        }
    ]


    let activePlayer = players[0];

    function playRound() {

    }
    
    function switchPlayer() {
        (activePlayer == players[0])?activePlayer = players[1] :activePlayer = players[0];
    }

    function checkWinner() {
        /*
        IF there is a winner THEN
            iterate the winners score
            announce that the player won
        ELSE
            keep playing
        */
    }

    function checkDraw() {
        /*
        IF all the squares are filled && no win condition THEN
            announce draw
            play again
        */
    }

    function checkGameWinner(activePlayer) {
        if (activePlayer.score = 3) {
            declareWinner();
        }
    }

    function declareWinner() {

    }

    function playAgain() {
        gameBoard.clearBoard;
        activePlayer = players[0]
    }

    function reset() {
        gameBoard.clearBoard;
        activePlayer = players[0]
        //clear player names
        //clear player scores
    }
    
}

function screenController() {
    //SET game to playGame
    //SET board to getBoard
    //SET playerXName
    //SET playerOName
    const startBtn = document.querySelector("#start-btn");
    const submitBtn = document.querySelector("#submitBtn");
    const playAgainBtn = document.querySelector("#play-again-btn");
    const resetBtn = document.querySelector("#resetBtn");

    /*
    EVENT board
        make board interactable on the dom
    ENDEVENT
    */

    startBtn.addEventListener("click", () => {
        dialog.showModal();
        form.reset();
    })
     
    submitBtn.addEventListener("click", () => {
        /*
        IF user entered names in the input fields THEN
            playerXName = name given in input field
            playerOName = name given in input field
        ELSE
            default to the original names
        ENDIF
        */
    })
    
    playAgainBtn.addEventListener("click", () => {
        //CALL playAgain
    })
    
    resetBtn.addEventListener("click", () => {
        //CALL reset
        //playerXName = Player X
        //playerOName = player O  
    })

}