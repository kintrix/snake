var ctx = document.getElementById("myCanvas");
var c = ctx.getContext("2d");
//
//
//
var result = 0;
//var dots = [];
//add_dot(Math.random()*400, Math.random()*300);
//x and y of the dots
//var ssize = 5;
//snake size
var bsize = 20;
//block size
var snake = []
add_snake(200-bsize/2-bsize*4, 150-bsize/2);
add_snake(200-bsize/2-bsize*3, 150-bsize/2);
add_snake(200-bsize/2-bsize*2, 150-bsize/2);
add_snake(200-bsize/2-bsize, 150-bsize/2);
add_snake(200-bsize/2, 150-bsize/2);


//snake body
var dirx = 1;
//
var diry = 0;
//
//
//
function add_snake(x, y) {
  snake.push(x);
  snake.push(y);
}
function draw_block(x, y) {
  c.save();
  c.fillStyle = "green"
  c.fillRect(x+1, y+1, bsize-2, bsize-2);
  c.restore();
}

function move_snake() {
  var headx = snake[snake.length-2];
  var heady = snake[snake.length-1];
  //
  headx = headx+bsize*dirx;
  heady = heady+bsize*diry*-1;
  //
  //
  add_snake(headx, heady);
  snake = snake.slice(2);
}
document.onkeydown = function(event) {myFunction(event);};
  function myFunction(event) {
    if (event.key === "w") {
      dirx = 0;
      diry = 1;
    }
    if (event.key === "s") {
      dirx = 0;
      diry = -1;
    }
    if (event.key === "a") {
      dirx = -1;
      diry = 0;
    }
    if (event.key === "d") {
      dirx = 1;
      diry = 0;
    }
  }
function draw() {
  c.fillRect(0, 0, myCanvas.width, myCanvas.height)
 
  for (var i = 0; i < snake.length; i = i + 2) {
    draw_block(snake[i], snake[i + 1]);
  }
 
  move_snake();
}

setInterval(draw, 500);





