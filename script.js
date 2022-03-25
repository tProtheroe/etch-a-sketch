const body = document.querySelector('body')
const grid = document.createElement('div');  
const container = document.querySelector('.container');

grid.id = 'grid';

container.appendChild(grid)

grid.style.gridTemplateColumns = 'repeat(16, auto)';
grid.style.gridTemplateRows = 'repeat(16, auto)';;

function makeGrid(num){
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

grid.addEventListener('mouseover', function(e){
    changeColour(e);
});

makeGrid(16);
