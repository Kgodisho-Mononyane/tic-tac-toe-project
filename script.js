//QUERY SELECTORS AND DECLARATIONS
const startBtn = document.querySelector("#start-btn")
const dialog = document.querySelector("#dialog");



//EVENT LISTENERS
startBtn.addEventListener("click", () => {
    console.log("startBtn clicked")
    dialog.showModal();
})



//FUNCTIONS