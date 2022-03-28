const grid = document.createElement('div');  
const clearBtn = document.createElement('button');
const body = document.querySelector('body')
const container = document.querySelector('.container');

clearBtn.textContent = "Clear Grid";
clearBtn.id = 'clear-grid';
grid.id = 'grid';


container.appendChild(clearBtn);
container.appendChild(grid);

function makeGrid(num){

    if(num > 100){
        num = prompt("The max number is 100!");
    }

    grid.style.gridTemplateColumns = `repeat(${num}, auto)`;
    grid.style.gridTemplateRows = `repeat(${num}, auto)`;

    for(let i = 1; i <= (num*num); i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
}

function changeColour(event){
    if(event.target.matches('.cell')){
        event.target.classList.add('hovered');
   };
}

function clearGrid(){
    let cells = document.querySelectorAll('.cell');
    
    for(let cell of cells){
        cell.classList.remove('hovered');
        cell.remove();
    };

    let gridSize = prompt("How many squares per side do you want? (Max. 100)");

    makeGrid(gridSize);
}

clearBtn.addEventListener('click', clearGrid);

grid.addEventListener('mouseover', function(e){
    changeColour(e);
});

makeGrid(16);
