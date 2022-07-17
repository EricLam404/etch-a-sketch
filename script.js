/*let bodys = document.createElement('div');

bodys.classList.add('body');*/
let bodys = document.querySelector(".bodys");

let left = document.querySelector(".left");
let buttons = document.createElement('div');

buttons.classList.add('buttons')

let sizeButton = document.createElement('button');

sizeButton.classList.add('button');
sizeButton.textContent = "Change grid size";

sizeButton.addEventListener('click', changeSize);

let rainbowButton = document.createElement('button');

rainbowButton.classList.add('button');
rainbowButton.textContent = "Rainbow Mode";

buttons.appendChild(sizeButton);
buttons.appendChild(rainbowButton);

left.appendChild(buttons);

let container = document.createElement('div');
container.classList.add('container');

for(let col = 0; col < 16; col++){
    let r = document.createElement('div');
    r.classList.add('row');
    r.style.height = "32px";
    for(let row = 0; row < 16; row++){
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.height = "32px";
        square.style.width = "32px";

        r.appendChild(square);
    }
    console.log(r)
    container.appendChild(r);
}

bodys.appendChild(container);


var slider = document.querySelector(".slider");
var output = document.querySelector(".output");
output.innerHTML = slider.value + "x" + slider.value;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value + "x" + this.value;
    changeSize(this.value);
}
function changeSize(squares){
    let size = 512 / squares;
    let container = document.querySelector(".container");
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    for(let col = 0; col < squares; col++){
        let r = document.createElement('div');
        r.style.height = size + "px";
        r.classList.add('row');
        for(let row = 0; row < squares; row++){
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.height = size + "px";
            square.style.width = size + "px";

            r.appendChild(square);
        }
        container.appendChild(r);
    }


}

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


window.addEventListener('mousedown', addHover);
window.addEventListener('mouseup', removeHover);

document.body.appendChild(bodys);
