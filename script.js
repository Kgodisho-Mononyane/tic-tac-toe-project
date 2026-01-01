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

function gameController() {
    //const board = gameBoard();
    const playerOneName = document.querySelector("#playerX").value;
    const playerTwoName = document.querySelector("#playerO").value;
    
    const playerXName = document.querySelector("#playerXName");
    const playerOName = document.querySelector("#playerOName");


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

    return {};
};

const screenController = (function() {
    const game = gameController();
    const startBtn = document.querySelector("#start-btn");
    const playAgainBtn = document.querySelector("#playAgainBtn");
    const resetBtn = document.querySelector("#resetBtn");
    const dialog = document.querySelector("#dialog");
    const form = document.querySelector("#form");

    startBtn.addEventListener("click", () => {
        console.log("start button clicked")
        dialog.showModal();
        form.reset();
    })

    playAgainBtn.addEventListener("click", () => {
        console.log("play again button clicked");
        //clear board variable
        //clear board on dom
    })

    resetBtn.addEventListener("click", () => {
        console.log("reset button clicked")
        //clear player names variables
        //clear player names on dom
        //clear player scores variables
        //clear player scores on dom
        //clear board variable
        //clear board on dom
        //set header back to original state
    });
})();




