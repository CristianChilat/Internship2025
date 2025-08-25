const chessboardContainerElement = document.getElementById("chess-board-container");
const chessboardSquares = chessboardContainerElement.querySelectorAll("td");

let isBlack = false;

for (let i = 0; i < chessboardSquares.length; i++) {
	isBlack = !isBlack;


	if (i % Math.sqrt(chessboardSquares.length) === 0) {
		isBlack = !isBlack;
	}

	if (isBlack) {
		chessboardSquares[i].style.background = "black";
	} else {
		chessboardSquares[i].style.background = "white";
	}
}
