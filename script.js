let container = document.createElement('div');
container.classList.add('container')

for(let col = 0; col < 16; col++){
    let r = document.createElement('div');
    r.classList.add('row')
    for(let row = 0; row < 16; row++){
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener("mouseover", changeColor);
        r.appendChild(square);
    }
    container.appendChild(r);
}

document.body.appendChild(container)

function changeColor(e) {
    console.log(e);
    console.log(this);
    this.style.backgroundColor = "black";   
}

