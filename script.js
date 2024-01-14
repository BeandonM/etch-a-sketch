const DEFAULT_COLOR = '#000000';
const DEFAULT_MODE = 'color'
const DEFAULT_GRIDSIZE = 16;

const GRID = document.querySelector('.grid-container');
const GRID_SIZE_SLIDER = document.getElementById('size-slider');
const GRID_TEXT = document.querySelector('.selected-size');

let currentColor = DEFAULT_COLOR;
let gridSize = DEFAULT_GRIDSIZE;
let mouseDown = false;
function setGridSizeText()
{
    GRID_TEXT.textContent = `${GRID_SIZE_SLIDER.value}`;
    gridSize = GRID_SIZE_SLIDER.value;
}

function updateGridSize()
{
    clearGrid();
    createGrid(gridSize);
}

function clearGrid()
{
    document.querySelectorAll('.cell').forEach(cell => {
        cell.style.backgroundColor = 'white';
    })
}
function createListeners()
{
    GRID_SIZE_SLIDER.addEventListener("input",setGridSizeText,false);
    GRID_SIZE_SLIDER.addEventListener("change",updateGridSize,false);
    document.body.onmousedown = () => (mouseDown = true);
    document.body.onmouseup = () => (mouseDown = false);
}
function setColor()
{

}
function setCellColor(e)
{
    if(e.type === 'mouseover' && !mouseDown)
    {
        return;
    }
    e.target.style.backgroundColor = currentColor;
}
function createGrid(size)
{
    GRID.textContent = ''

    for(let i = 0; i < size; i++)
    {
        for(let j = 0; j < size; j++)
        {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mousedown',setCellColor);
            cell.addEventListener('mouseover',setCellColor);
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
createListeners();
createGrid(gridSize);
/*
const GRID_CONTAINER = document.querySelector('.grid-container');
const cell = document.createElement('div');
cell.className = "cell"
GRID_CONTAINER.appendChild(cell);
*/