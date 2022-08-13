const symbols = ['x', 'o']
const winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let board = ['', '', '', '', '', '', '', '', '']
let playerTime = 0
let gameOver = false

function handleMove(position) {
    if (board[position] != '' || gameOver) return
    board[position] = symbols[playerTime]
    playerTime = playerTime == 0 ? 1 : 0
    setGameOver()
}

function setGameOver() {
    for (const state of winStates) {
        positionState1 = state[0]
        positionState2 = state[1]
        positionState3 = state[2]

        if (board[positionState1] == board[positionState2] && board[positionState1] == board[positionState3] &&
            board[positionState1] != '')  gameOver = true
    }
}