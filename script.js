(function() {
    const startBtn = document.querySelector("#start-btn");
    const dialog = document.querySelector("#dialog");
    const submitBtn = document.querySelector("#submitBtn");
    const form = document.querySelector("#form");
    const playerX = document.querySelector("#playerX").value;
    const playerO = document.querySelector("#playerO").value;
    
    
    startBtn.addEventListener("click", () => {
        dialog.showModal();
        form.reset();
    })

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        dialog.close();
    })

    return {playerX, playerO};
})();