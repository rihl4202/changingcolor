
function setup() {
  createCanvas(450,450);

}

function draw() 
{
  background("black");
  
  if (keyDown("right")) {
    background("blue")
  }
  
  if (keyDown("up")) {
    background("red")
  }
  
  if (keyDown("left")) {
    background("red")
  }
  
  if (keyDown("down")) {
    background("yellow")
  }

  drawSprites()
  
}




