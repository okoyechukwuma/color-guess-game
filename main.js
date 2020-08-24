let squaresNum = 6;
let colors = generateRandomColors(squaresNum);
let header = document.querySelector(".header-container");
let newColor = document.querySelector(".reset");
let easy = document.querySelector(".easy");
let hard = document.querySelector(".hard");
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#rgb");
let answer = document.querySelector(".answer");
let pickedColor = pickColor();


colorDisplay.innerHTML = pickedColor;
colorDisplay.style.color =  pickedColor;

newColor.addEventListener('click', () => {
    colors = generateRandomColors(squaresNum);
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;
    colorDisplay.style.color = pickedColor;
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    header.style.backgroundColor = "rgb(20, 29, 41)";
    newColor.innerHTML = "new color";
    answer.innerHTML = "";
});

easy.addEventListener('click', () => {
    squaresNum = 3;
    colors = generateRandomColors(squaresNum);
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;
    colorDisplay.style.color = pickedColor;
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    header.style.backgroundColor = "rgb(20, 29, 41)";
    newColor.innerHTML = "new color";
    easy.classList.add('active');
    hard.classList.remove('active');
    answer.innerHTML = "";
});

hard.addEventListener('click', () => {
    squaresNum = 6
    colors = generateRandomColors(squaresNum);
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;
    colorDisplay.style.color = pickedColor;
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
    easy.classList.remove('active');
    hard.classList.add('active');
    answer.innerHTML = "";
});


for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener('click', () => {
        let clickedColor = squares[i].style.backgroundColor;
         if (clickedColor === pickedColor) {
             answer.innerHTML = "correct";
             changeColors(clickedColor);
             header.style.backgroundColor = clickedColor;
             newColor.innerHTML = "play again?";
         }else{
            squares[i].style.backgroundColor = "rgb(20, 29, 41)";
            answer.innerHTML = "keep trying";
         }
    });
}

changeColors = (color) => {
    for (let i = 0; i < squares.length; i++) {
        const element = squares[i];
        element.style.backgroundColor = color;
        
    }
}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num) {
    let arr = [];
    for(let i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr;
}

function randomColor() {
   let r = Math.floor(Math.random() * 256);
   let g = Math.floor(Math.random() * 256);
   let b = Math.floor(Math.random() * 256);
   return "rgb("+r+", "+g+", "+b+")";
}