const gameBoard = (function() {
    let board = ["","","","","","","","",""];

    const getBoard = () => board;

    return {getBoard}
})();

const players = (function() {
    const playerXScore = 0;
    const playerOScore = 0;

    return {playerXScore, playerOScore};
})();

const playGame = (function() {

    return {}
})();

const displayGame = (function() {
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


/*
(function() {
    
    const dialog = document.querySelector("#dialog");
    const submitBtn = document.querySelector("#submitBtn");
    const form = document.querySelector("#form");
    const playerX = document.querySelector("#playerX");
    const playerO = document.querySelector("#playerO");
    
    
    

    submitBtn.addEventListener("click", (e) => {
        const playerXName = document.querySelector("#playerXName");
        const playerOName = document.querySelector("#playerOName");
        
        e.preventDefault();
        dialog.close();
        playerXName.textContent = playerX.value;
        playerOName.textContent = playerO.value;

    })

    return {playerX, playerO};
})();
*/


