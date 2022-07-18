let rainbowMode = false;

let bodys = document.querySelector(".bodys");

let left = document.querySelector(".left");
let buttons = document.createElement('div');

buttons.classList.add('buttons')

let rainbowButton = document.createElement('button');

rainbowButton.classList.add('rainbow', "button");
rainbowButton.textContent = "Rainbow Mode";

let blackButton = document.createElement('button');

blackButton.classList.add('black', "button");
blackButton.textContent = "Black Mode";

buttons.appendChild(rainbowButton);
buttons.appendChild(blackButton);

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
        square.addEventListener('mousedown', changeColor);

        r.appendChild(square);
    }
    container.appendChild(r);
}

bodys.appendChild(container);


var slider = document.querySelector(".slider");
var output = document.querySelector(".output");
output.innerHTML = slider.value + "x" + slider.value;


slider.oninput = function() {
    output.innerHTML = this.value + "x" + this.value;
    changeSize(this.value);
}

let rainbow = document.querySelector(".rainbow");
rainbow.addEventListener('click', changeRainbow);

let black = document.querySelector(".black");
black.addEventListener('click', changeBlack);

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
            square.addEventListener('mousedown', changeColor);

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

function changeRainbow(e) {
    this.style.backgroundColor = "red";
    rainbowMode = true;
    let color = document.querySelector(".black");
    color.style.backgroundColor = "seagreen";
}

function changeBlack(e) {
    this.style.backgroundColor = "red";
    rainbowMode = false;
    let color = document.querySelector(".rainbow");
    color.style.backgroundColor = "seagreen";
}

function changeColor(e) {
    console.log(rainbowMode);
    if(rainbowMode){
        this.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    } else
        this.style.backgroundColor = "black";  
}


window.addEventListener('mousedown', addHover);
window.addEventListener('mouseup', removeHover);

document.body.appendChild(bodys);
