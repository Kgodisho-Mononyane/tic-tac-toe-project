const gameBoard = (function() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell())
        }
    }

    const getBoard = () => board;

    return {getBoard}
})();

function Cell() {
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

const gameController = (function() {
    const board = gameBoard();

    const players = [
        {
            name: playerOneName,
            token: "X",
            score: 0
        },
        {
            name: playerTwoName,
            token: "O",
            score: 0
        }
    ]
})();

const screenController = (function() {
    const startBtn = document.querySelector("#start-btn");
    const playAgainBtn = document.querySelector("#playAgainBtn");
    const resetBtn = document.querySelector("#resetBtn");

    startBtn.addEventListener("click", () => {
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




