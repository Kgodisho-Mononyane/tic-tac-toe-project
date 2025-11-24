(function() {
    const startBtn = document.querySelector("#start-btn");
    const dialog = document.querySelector("#dialog");
    const submitBtn = document.querySelector("#submitBtn");
    const form = document.querySelector("#form");
    const playerX = document.querySelector("#playerX");
    const playerO = document.querySelector("#playerO");
    
    
    startBtn.addEventListener("click", () => {
        dialog.showModal();
        form.reset();
    })

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

const playGame = (function() {
    const playerXScore = 0;
    const playerOScore = 0;
})

const reset = (function() {
    const resetBtn = document.querySelector("#resetBtn");

    resetBtn.addEventListener("click", () => {
        console.log("reset button clicked")
        //clear player names variables
        //clear player names on dom
        //clear player scores variables
        //clear player scores on dom
        //clear board variable
        //clear board on dom
        //set header back to original state
    })
})();