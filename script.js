//QUERY SELECTORS AND DECLARATIONS
const startBtn = document.querySelector("#start-btn")
const dialog = document.querySelector("#dialog");
const submitBtn = document.querySelector("#submitBtn")



//EVENT LISTENERS
startBtn.addEventListener("click", () => {
    console.log("startBtn clicked")
    dialog.showModal();
})

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
})



//FUNCTIONS