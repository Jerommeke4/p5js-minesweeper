function Grid(nrOfX, nrOfY, w, h) {

  this.xElements = nrOfX;
  this.yElements = nrOfY;
  this.elementWidth = w;
  this.elementHeight = h;
  this.elements = [];

  this.setup = function(bombFactor) {
    var element;
    for (var i=0; i < this.yElements; i++) {
      // loop through the cols
      for (var j = 0; j< this.xElements; j++) {
        element = new Element(j*this.elementWidth, i*this.elementHeight, this.elementWidth, this.elementHeight, bombFactor);
        this.elements.push(element);
      }
    }

    // loop through elements
    for (i = 0; i < this.elements.length; i++) {
      // set the neighbors
      element = this.elements[i];
      element.addNeighbors(this);
    }

    console.log(this.elements);

  };

  this.getElements = function() {
    return this.elements;
  };

  this.getElement = function(x,y) {
    for (var i = 0 ; i < this.elements.length; i++) {
      var element = this.elements[i];
      if (element.x === x && element.y === y) {
        return element;
      }
    }
    return null;
  };

  this.getStartElement = function() {
    while (true) {
      var pos = Math.round(random(0, this.elements.length));
      if (this.elements[pos].isBomb === false && this.elements[pos].getNumberOfBombsAround() === 0) {
        return this.elements[pos];
      }
    }
  }

}
