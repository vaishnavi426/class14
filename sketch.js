var ball = {
  x: 20,
  y: 20,
  radius: 20,
  color: ['blue','red','black','yellow'],
  speedX: 5,
  speedY: 3
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(ball.color[2]);
  circle(ball.x,ball.y,ball.radius);
  ball.x = ball.x+ball.speedX;
  ball.y = ball.y+ball.speedY;
}