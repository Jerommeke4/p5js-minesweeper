function Element(x,y,w,h, bombFactor) {
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.isBomb = (random(0, 1)) > (100-bombFactor)/100;
  this.isOpened = false;

  /** @var Element **/
  this.neighbors = {
    n: null,
    ne: null,
    e: null,
    se: null,
    s: null,
    sw: null,
    w: null,
    nw: null
  };

  /**
   *
   * @param grid Grid
   */
  this.addNeighbors = function(grid) {
    this.neighbors.n = grid.getElement(this.x, this.y-h);
    this.neighbors.ne = grid.getElement(this.x+w, this.y-h);
    this.neighbors.e = grid.getElement(this.x+w, this.y);
    this.neighbors.se = grid.getElement(this.x+w, this.y+h);
    this.neighbors.s = grid.getElement(this.x, this.y+h);
    this.neighbors.sw = grid.getElement(this.x-w, this.y+h);
    this.neighbors.w = grid.getElement(this.x-w, this.y);
    this.neighbors.nw = grid.getElement(this.x-w, this.y-h);
  };

  this.getNumberOfBombsAround = function() {
    var result = 0;
    if (this.neighbors.n && this.neighbors.n.isBomb === true) result++;
    if (this.neighbors.ne && this.neighbors.ne.isBomb === true) result++;
    if (this.neighbors.e && this.neighbors.e.isBomb === true) result++;
    if (this.neighbors.se && this.neighbors.se.isBomb === true) result++;
    if (this.neighbors.s && this.neighbors.s.isBomb === true) result++;
    if (this.neighbors.sw && this.neighbors.sw.isBomb === true) result++;
    if (this.neighbors.w && this.neighbors.w.isBomb === true) result++;
    if (this.neighbors.nw && this.neighbors.nw.isBomb === true) result++;

    return result;
  };

  this.openNeighbors = function () {
    if (this.neighbors.n && this.neighbors.n.isOpened === false) this.neighbors.n.open();
    if (this.neighbors.ne && this.neighbors.ne.isOpened === false) this.neighbors.ne.open();
    if (this.neighbors.e && this.neighbors.e.isOpened === false) this.neighbors.e.open();
    if (this.neighbors.se && this.neighbors.se.isOpened === false) this.neighbors.se.open();
    if (this.neighbors.s && this.neighbors.s.isOpened === false) this.neighbors.s.open();
    if (this.neighbors.sw && this.neighbors.sw.isOpened === false) this.neighbors.sw.open();
    if (this.neighbors.w && this.neighbors.w.isOpened === false) this.neighbors.w.open();
    if (this.neighbors.nw && this.neighbors.nw.isOpened === false) this.neighbors.nw.open();
  };
  this.open = function() {
    this.isOpened = true;
    if (this.getNumberOfBombsAround() === 0) {
      this.openNeighbors();
    }
  };


}


