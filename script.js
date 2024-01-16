const DEFAULT_COLOR = '#000000';
const DEFAULT_MODE = 'color'
const DEFAULT_GRIDSIZE = 16;
const DRAW = "draw";
const ERASE = "erase";
const RANDOM = "random";
const CELL_BORDER = '1px solid lightgray';

const GRID = document.querySelector('.grid-container');
const GRID_SIZE_SLIDER = document.getElementById('size-slider');
const GRID_TEXT = document.querySelector('.selected-size');
const GRID_COLOR = document.getElementById('colorpicker');
const GRID_TOGGLE = document.querySelector('input[name=grid-toggle]');

const COLOR_MODE = document.querySelector('.btnColor');
const RANDOM_MODE = document.querySelector('.btnRandomColor');
const ERASE_MODE = document.querySelector('.btnErase');
const CLEAR_CANVAS = document.querySelector('.btnClearCanvas');

let currentMode = DRAW
let currentColor = DEFAULT_COLOR;
let gridSize = DEFAULT_GRIDSIZE;
let mouseDown = false;
let showGrid = false;

function setMode(mode)
{
    activateButton(mode);
    currentMode = mode;
}

function activateButton(mode)
{
    COLOR_MODE.classList.remove('active');
    RANDOM_MODE.classList.remove('active');
    ERASE_MODE.classList.remove('active');
    console.log("Here");
    switch(mode)
    {
        case DRAW:
        {
            console.log("Yu");
            COLOR_MODE.classList.add('active');
            break;
        }
        case ERASE:
        {
            ERASE_MODE.classList.add('active');
            break;
        }
        case RANDOM:
        {
            RANDOM_MODE.classList.add('active');
            break;
        }

    }
}

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
    GRID_COLOR.addEventListener("input",setColor,false);

    COLOR_MODE.onclick = () => setMode(DRAW);
    RANDOM_MODE.onclick = () => setMode(RANDOM);
    ERASE_MODE.onclick = () => setMode(ERASE);

    document.body.onmousedown = () => (mouseDown = true);
    document.body.onmouseup = () => (mouseDown = false);
    GRID_TOGGLE.addEventListener('change', function () {
        if (this.checked) {
            document.querySelectorAll(".cell").forEach(square => {
                square.style.border = CELL_BORDER;
            });
            showGrid = true;
        } else {
            document.querySelectorAll(".cell").forEach(square => {
                square.style.border = 'none';
            });
            showGrid = false;
        }
    });
}

function setColor()
{
    currentColor = GRID_COLOR.value;
}

function getColor()
{
    return currentColor;
}
function setCellColor(e)
{
    if(e.type === 'mouseover' && !mouseDown)
    {
        return;
    }
    e.target.style.backgroundColor = getColor();
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
            if (showGrid == true)
            {
                cell.style.border = CELL_BORDER;
            }
            /*cell.style.border = '1px solid lightgray';*/
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