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