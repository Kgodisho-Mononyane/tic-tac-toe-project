//QUERY SELECTORS AND DECLARATIONS
const startBtn = document.querySelector("#start-btn")
const dialogBox = document.querySelector("#dialog-box");



//EVENT LISTENERS
startBtn.addEventListener("click", () => {
    console.log("startBtn clicked")
    dialogBox.showModal();
})



//FUNCTIONS