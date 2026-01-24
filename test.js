const gameBoard = (function() {
    const rows = 3;
    const columns = 3;
    const board = [];
    //const cell = "";

    /*
    (create a 3x3 grid for the game board)
    FOR let i = 0; i < rows; i++
        board[i] = [];
        FOR let j = 0; j < columns; j++
    ENDFOR
*/

    let getBoard = board;

    function placeToken() {
        //place players token in specific spot
    }

    function clearBoard() {
        //reset the board Board
    }

    return {
        getBoard,
        clearBoard,
        placeToken
    }
})();



/*
FUNCTION playGame
    SET board to getBoard
    SET activePlayer to player X

    SET players
        player X
            name //default to player X if not given
            token
            score
        player O
            name //default to player O if not given
            token
            score

    FUNCTION playGame
    ENDFUNCTION
    
    
    FUNCTION switchPlayer
        IF activePlayer is player X THEN
            switch to Player O
        ELSE
            switch to Player X
        ENDIF
    ENDFUNCTION


    FUNCTION checkWinner
        IF there is a winner THEN
            iterate the winners score
            announce that the player won
        ELSE
            keep playing
    ENDFUNCTION

    FUNCTION checkDraw
        IF all the squares are filled && no win condition THEN
            announce draw
            play again
    ENDFUNCTION
    
    FUNCTION checkGameWinner
        IF PlayerX or PlayerO score = 3 THEN
            CALL declarewinner
    ENDFUNCTION
    
    FUNCTION declareWinner

    ENDFUNCTION
    
    FUNCTION playAgain
        clear board
        set activePlayer to player X
    ENDFUNCTION

    FUNCTION reset
        clear player names
        clear player scores
        clear board
    ENDFUNCTION
    
    RETURN
    ENDRETURN
ENDFUNCTION
*/


function screenController() {
    //SET game to playGame
    //SET board to getBoard
    //SET playerXName
    //SET playerOName
    const startBtn = document.querySelector("#start-btn");
    const submitBtn = document.querySelector("#submitBtn");
    const playAgainBtn = document.querySelector("#play-again-btn");
    const resetBtn = document.querySelector("#resetBtn");

    /*
    EVENT board
        make board interactable on the dom
    ENDEVENT
    */

    startBtn.addEventListener("click", () => {
        //open dialogbox
    })
     
    submitBtn.addEventListener("click", () => {
        /*
        IF user entered names in the input fields THEN
            playerXName = name given in input field
            playerOName = name given in input field
        ELSE
            default to the original names
        ENDIF
        */
    })
    
    playAgainBtn.addEventListener("click", () => {
        //CALL playAgain
    })
    
    resetBtn.addEventListener("click", () => {
        //CALL reset
        //playerXName = Player X
        //playerOName = player O  
    })

}