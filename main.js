function makeBoard(size = 16){
	let board = document.querySelector('#board');
	//cleanup
	while(board.firstChild){
		board.removeChild(board.firstChild);
	}
	//set the grid columns and rows to be equally spaced
	board.setAttribute('style', `grid-template-columns:repeat(${size},1fr); grid-template-rows:repeat(${size},1fr)`);
	for(i = 1; i <= size; i++){
		for(j = 1; j<=size;j++){
			let div = document.createElement('div');
			div.classList.add("grid-square");
			board.appendChild(div);
			div.addEventListener('pointerenter', hoverColor)
		}
	}
	let spaces = document.querySelectorAll('div');
}

function randomColor(){
	// generates a random rgb color string
	let color = '';
	let number = 0;
	for (i = 0; i < 3; i++){
		number = Math.random() * 255;
		color = color + ',' + number; 
	}
	return color.slice(1);
}

function hoverColor(event){
	this.setAttribute('style', `background-color: black;`);
}

function isInteger(num){
	return (typeof num === 'number') && (num % 1 === 0);
}

function resetPrompt(){
	let size;
		
	do {
		size = parseInt(prompt("Enter the amount of squares for the width and height of the new board."));
	} while (!(isInteger(size)))

	makeBoard(size);
}



makeBoard();