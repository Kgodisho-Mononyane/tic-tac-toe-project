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

    RETURN
        getBoard,
        
ENDFUNCTION    



FUNCTION playGame
    SET board to getBoard
    SET activePlayer to player X

    SET players
        player 1
            name
            token
            score
        player 2
            name
            token
            score

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
    

ENDFUNCTION



FUNCTION screenController
ENDFUNCTION


*/