function NoughtsDeterminer(strArr) {
    //copies the current board
    function copyBoard(copyBoard) {
        var outCopyBoard = [];

        for(var i = 0;i < copyBoard.length;i++){
            outCopyBoard.push(copyBoard[i]);
        }

        return outCopyBoard;
    }

    //checks if a space is empty
    function checkIfEmpty(emptyBoard, position){
        return (emptyBoard[position] !== 'X' && emptyBoard[position] !== 'O')
    }
    //checks to see if a specific move can generate a win
    function checkForWin(board_now, letter){
        return ((board_now[8] == letter && board_now[9] == letter && board_now[10] == letter) ||
            (board_now[4] == letter && board_now[5] == letter && board_now[6] == letter) ||
            (board_now[0] == letter && board_now[1] == letter && board_now[2] == letter) ||
            (board_now[8] == letter && board_now[4] == letter && board_now[0] == letter) ||
            (board_now[9] == letter && board_now[5] == letter && board_now[1] == letter) ||
            (board_now[10] == letter && board_now[6] == letter && board_now[2] == letter) ||
            (board_now[8] == letter && board_now[5] == letter && board_now[2] == letter) ||
            (board_now[10] == letter && board_now[5] == letter && board_now[0] == letter))
    }

    //goes through each possible move to see if it's a winning move. When it finds one, it returns the winning move
    function returnWinningMove(computerLetter) {
        for (var num = 0; num < 11; num++) {
            var boardCopy = copyBoard(strArr);
            if (checkIfEmpty(boardCopy, num)) {
                boardCopy[num] = computerLetter;
                if (checkForWin(boardCopy, computerLetter)) {
                    return num
                }
            }
        }
    }

    //checks each letter for a winner
    if (returnWinningMove('X')){
        return returnWinningMove('X');
    } else {
        return returnWinningMove('O');
    }
}