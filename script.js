const DEFAULT_COLOR = '#00000';
const DEFAULT_MODE = 'color'
const DEFAULT_GRIDSIZE = 16;

const GRID = document.querySelector('.grid-container');

function createGrid(size)
{
    GRID.textContent = '';

    for(let i = 0; i < size; i++)
    {
        for(let j = 0; j < size; j++)
        {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            let scale = 100/size;
            cell.style.width = `${scale}%`
            cell.style.height = `${scale}%`
            cell.style.border = '1px solid lightgray';
            GRID.append(cell);
        }
    }
    const div = document.createElement('div');
    div.classList.add('cell');
    GRID.appendChild(div);
}

createGrid(16);
/*
const GRID_CONTAINER = document.querySelector('.grid-container');
const cell = document.createElement('div');
cell.className = "cell"
GRID_CONTAINER.appendChild(cell);
*/