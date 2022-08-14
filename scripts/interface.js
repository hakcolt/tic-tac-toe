let squares
document.addEventListener("DOMContentLoaded", () => {
    squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        square.addEventListener("click", handleClick)
    })
})

function handleClick(event) {
    const position = event.target.id
    handleMove(position)
    updateSquare(position)
    if (gameOver)
        document.getElementById("winnerText").style.display = "block"
}

function updateSquare(position) {
    const symbol = board[position]
    if (symbol != '')
        squares[position].innerHTML = "<div class='" + symbol + "'></div>"
}