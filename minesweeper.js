var elementW = 20;
var elementH = 20;
var defaultGridX = 50;
var defaultGridY = 50;
var bombFactor = 5;
var grid = null;

// runs one time at start
function setup() {
  createCanvas(elementW* defaultGridX+1, elementH* defaultGridY+1);
  grid = new Grid(defaultGridX, defaultGridY, elementW, elementH);
  grid.setup(bombFactor);
  grid.getStartElement().open();
}

// runs in a loop of 60 f/s
function draw() {
    var elements = grid.getElements();
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      if (element.isBomb === true && element.isOpened) {
        fill('#000000');
      }
      else if (element.isOpened === false) {
        fill('#dddddd');
      }
      else {
        fill('#fff');
      }
      rect(element.x, element.y, element.width, element.height);

      if (element.isOpened === true && element.isBomb === false && element.getNumberOfBombsAround() > 0) {
        fill('#ff0000');
        text(element.getNumberOfBombsAround(), element.x + (element.width / 3), element.y + (element.height / 3), element.width, element.height);
      }
    }
  noLoop();

}

function mouseClicked() {
  // mouseX mouseY.

  //which element was targeted.
  var restValueX = mouseX % elementW;
  var restValueY = mouseY % elementH;

  var x = mouseX-restValueX;
  var y = mouseY- restValueY;

  var element = grid.getElement(x,y);

  element.open();

  loop();
}
