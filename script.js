(function() {
    const startBtn = document.querySelector("#start-btn");
    const dialog = document.querySelector("#dialog");
    const submitBtn = document.querySelector("#submitBtn");
    
    
    startBtn.addEventListener("click", () => {
        console.log("startBtn clicked")
        dialog.showModal();
    })

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
    })
})();