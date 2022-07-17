let bodys = document.createElement('div');

bodys.classList.add('body');

let buttons = document.createElement('div');

buttons.classList.add('buttons')

let sizeButton = document.createElement('button');

sizeButton.classList.add('button');
sizeButton.textContent = "Change grid size"

let rainbowButton = document.createElement('button');

rainbowButton.classList.add('button');
rainbowButton.textContent = "Rainbow Mode";

buttons.appendChild(sizeButton);
buttons.appendChild(rainbowButton);

bodys.appendChild(buttons);

let container = document.createElement('div');
container.classList.add('container');

for(let col = 0; col < 16; col++){
    let r = document.createElement('div');
    r.classList.add('row')
    for(let row = 0; row < 16; row++){
        let square = document.createElement('div');
        square.classList.add('square');
        r.appendChild(square);
    }
    container.appendChild(r);
}

bodys.appendChild(container);

window.addEventListener('mousedown', addHover);

window.addEventListener('mouseup', removeHover);

function removeHover(e) {
    let squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.removeEventListener("mouseover", changeColor);
    })
}

function addHover(e) {
    let squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener("mouseover", changeColor);
    })
}

function changeColor(e) {
    this.style.backgroundColor = "black";   
}


document.body.appendChild(bodys);
