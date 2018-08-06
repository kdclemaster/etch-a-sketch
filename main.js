function makeBoard(size = 16){
	let board = document.querySelector('#board');
	//set the grid columns and rows to be equally spaced
	board.setAttribute('style', `grid-template-columns:repeat(${size},1fr); grid-template-rows:repeat(${size},1fr)`);
	for(i = 1; i <= size; i++){
		for(j = 1; j<=size;j++){
			let div = document.createElement('div');
			div.classList.add("grid-square");
			board.appendChild(div);
		}
	}
}

makeBoard();