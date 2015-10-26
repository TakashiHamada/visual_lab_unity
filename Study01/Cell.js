var Cell = function (x, y) {
    
    this.x = x;
    this.y = y;
}

Cell.prototype.showBody = function () {
    
    var noise = P.noise(this.x / P.width, this.y / P.height);
    var side = noise * 100 - 30;
    
    var side2 = 20;
    
//    var color = P.color(P.random(0,360),100,100,0.2);
    var color = P.color(H.palette());
    P.noFill();
//    P.noStroke();
    P.stroke(color);
//    P.fill(color);
    P.strokeWeight(1);
    P.rect(this.x, this.y, side2, side2);
    
//    P.stroke(P.color(0,0,100));
//    P.strokeWeight(0.5);
    
//    P.ellipse(this.x, this.y, side, side);
    
    
    
}

Cell.prototype.showLinks = function (pixels) {

    
    
    
    var self = this;
    var color = P.color(H.palette());
//    var color = P.color(0);
    P.stroke(color);
    P.strokeWeight(0.2);
    _.each(pixels, function (pixel){
        
        if(P.random(100) > 0.1) return;
        
        P.line(self.x,self.y,pixel.x,pixel.y);
    });
}