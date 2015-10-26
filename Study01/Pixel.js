var Pixel = function (x, y) {
    this.x = x;
    this.y = y;
    
    this.radius = null;
}

Pixel.prototype.showBody = function () {

    P.noStroke();
    
//    console.log(P.noise(this.x,this.y) * 360 - 180);
    
    var color = P.color(0,100,P.noise(this.x,this.y) * 100 +50,1);
    P.fill(color);
//    var radius = P.noise(this.x,this.y) * 50;
    var radius = 1;
    P.ellipse(this.x, this.y, radius, radius);
    
    this.radius = radius;
    
}

Pixel.prototype.showLinks = function (pixels) {

    if(P.random(100) > 5) return;
    
    
    var self = this;
    var color = P.color(60,100,100,100);
    P.stroke(color);
    P.strokeWeight(0.05);
    _.each(pixels, function (pixel){
        P.line(self.x,self.y,pixel.x,pixel.y);
    });
}