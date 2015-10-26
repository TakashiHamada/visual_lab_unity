var Cell = function (x, y) {
    
    this.x = x;
    this.y = y;
}

Cell.prototype.showBody = function () {
    
    var noise = P.noise(this.x / P.width, this.y / P.height);
    var side = noise * 200 - 100;
    
    var color = P.color(0,0,0,100);
    P.noFill();
    
    P.stroke(color);
    P.strokeWeight(0.2);
    P.rect(this.x, this.y, side, side);
}