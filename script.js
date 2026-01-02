function gameBoard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(cell());
        };
    };

    const getBoard = () => board;

    function addToken() {
        // add player tokens to the board
    }

    function printBoard() {

    }

    return {
        getBoard,
        addToken,
        printBoard
    }
};

function cell() {
    let value = 0;

    const addToken = (player) => {
        value = player;
    };

    const getValue = () => value;

    return {
        addToken,
        getValue
    }
}


//Game Functionality
function gameController() {
    const board = gameBaord()
    
    //const board = gameBoard();
    const playerOneName = document.querySelector("#playerX").value;
    const playerTwoName = document.querySelector("#playerO").value;
    // const playerXName = document.querySelector("#playerXName");
    // const playerOName = document.querySelector("#playerOName");

    //Addition: Default player names to Player X and Player O if not included
    const players = [
        {
            name: playerOneName, //Define PlayerOneName
            token: "X",
            score: 0
        },
        {
            name: playerTwoName, //Define PlayerTwoName
            token: "O",
            score: 0
        }
    ];

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;

    function playRound() {

    }

    function winCondition() {

    }

    function playAgain() {
        alert("Play again");
        //clear board variable
         //clear board on dom  
    }

    function reset() {
        alert("reset");
        //clear player names variables
        //clear player names on dom
        //clear player scores variables
        //clear player scores on dom
        //clear board variable
        //clear board on dom
    }

    return {
        getActivePlayer,
        playAgain,
        reset,
    };
};

//DOM Manipulation
const screenController = (function() {
    const game = gameController();
    

    const gameHeading = document.querySelector("#game-heading");
    const startBtn = document.querySelector("#start-btn");
    const playAgainBtn = document.querySelector("#play-again-btn");
    const resetBtn = document.querySelector("#resetBtn");
    const dialog = document.querySelector("#dialog");
    const resultDialog = document.querySelector("#result-dialog")
    const form = document.querySelector("#form");

    function updateScreen() {
        //Clear board
        const board = game.getBoard();
        const activePlayer = game.getActivePlayer();

        gameHeading.textContent = `${activePlayer.name}'s turn!`
    }
    
    startBtn.addEventListener("click", () => {
        console.log("start button clicked")
        dialog.showModal();
        form.reset();
    })

    playAgainBtn.addEventListener("click", () => {
         console.log("play again button clicked");
         resultDialog.close(); //close dialog box
         game.playAgain()
    });

    resetBtn.addEventListener("click", () => {
        console.log("reset button clicked");
        gameHeading.textContent = "Start!";
        game.reset();
    });

    updateScreen();
})();




