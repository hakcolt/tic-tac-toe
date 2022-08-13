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
    updateScreen()
}

function updateScreen() {
    squares.forEach(square => {
        const position = square.id
        const symbol = board[position]

        if (symbol != '') {
            square.innerHTML = "<div class='" + symbol + "'></div>"
        }
    })
    if (gameOver)
        document.getElementById("winnerText").style.display = "block"
}