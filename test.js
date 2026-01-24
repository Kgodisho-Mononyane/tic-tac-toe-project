/*
FUNCTION gameBoard
    SET rows to 3
    SET columns to 3
    SET board to []
    SET cell to ""

    (create a 3x3 grid for the game board)
    FOR let i = 0; i < rows; i++
        board[i] = [];
        FOR let j = 0; j < columns; j++
    ENDFOR

    SET getBoard to board

    FUNCTION placeToken
        place players token in specific spot
    ENDFUNCTION
    
    FUNCTION clearBoard
        reset board
    ENDFUNCTION
    
    RETURN
        getBoard,
        clearBoard,
        placeToken
ENDFUNCTION    



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



FUNCTION screenController
    SET game to playGame
    SET board to getBoard
    SET startBtn
    SET submitBtn
    SET playAgainBtn
    SET resetBtn

    EVENT board
        make board interactable on the dom
    ENDEVENT
    
    EVENT startBtn
        open dialog box
    ENDEVENT
    
    EVENT submitBtn
    ENDEVENT
    
    EVENT playAgainBtn
        CALL playAgain
    ENDEVENT
    
    EVENT resetBtn
        CALL reset
    ENDEVENT

ENDFUNCTION



*/