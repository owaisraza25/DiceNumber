// var plus = document.getElementById("plus")
// var span = document.getElementById("span")
// var minus = document.getElementById("minus")

// plus.addEventListener("click", increment)
// minus.addEventListener("click", dicrement)

// var number = 0;

// function increment() {
//     number = number + 1
//     num.innerText = number
// }


// function dicrement() {
//     if(number > 0){
//         number = number - 1
//         num.innerText = number
//     }
// }


// var randonmNumber = Math.floor(randonmNumber = 1)*6

// console.log(randonmNumber)



// const canvas = document.getElementById("myCanvas");
// const ctx = canvas.getContext("2d");

// // Define the square's position and size
// const squareSize = 100;
// const squareX = (canvas.width - squareSize) / 2;
// const squareY = (canvas.height - squareSize) / 2;

// // Define the initial color of the square
// let color = "white";

// // Game loop
// function gameLoop() {
//   // Clear the canvas
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // Change the color of the square randomly
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);
//   color = `rgb(${red}, ${green}, ${blue})`;

//   // Draw the square
//   ctx.fillStyle = color;
//   ctx.fillRect(squareX, squareY, squareSize, squareSize);

//   // Request another frame of the loop
//   requestAnimationFrame(gameLoop);
// }

// // Start the game loop
// gameLoop();
















// var box = document.getElementById("mybox");
// var btn = document.getElementById("clr_btn");



// box.addEventListener("click", colorChange)

// var change = `rgb(${0 , 0, 0})`

// function colorChange () {
    

// }





















// var randomNumber = Math.floor(Math.random() * 6) +1

// console.log(randomNumber)


// const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
// console.log(randomColor);























// var btn = document.getElementById("colorBtn");
// var box_clr = document.getElementById("box_clr");

// btn.addEventListener("click" , boxColor)

// function boxColor() {

// var red = Math.floor(Math.random()* 256);
// var green = Math.floor(Math.random()* 256);
// var blue = Math.floor(Math.random()* 256);

// var randomColor = `${red}, ${green}, ${blue}`;

// randomColor = box_clr;

// box_clr.stlye.backgroundColor = randomColor;

// };














// var colorbtn = document.getElementById("colorbtn");

// var box_clr = document.getElementById("box_color");

// colorbtn.addEventListener("click", changecolor)

// var randomNumber

// function changecolor () {

//     var colorhex = [ ]

// }



var randomNumber = Math.floor(Math.random()*6 +1);

function randomImage() {
    var diceNumber = Math.floor((Math.random() * 6) + 1)
    console.log(diceNumber)
    switch (diceNumber) {
        case 1:
            return '1.png'
        case 2:
            return '2.png'
        case 3 : 
            return '3.png'
        case 4:
            return '4.png'
        case 5:
            return '5.png'
        case 6 : 
            return '6.png'   
        // default : 
        //    return 'Stay.jpg'
    }
}






















