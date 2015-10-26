var Ball = function (x, y) {
    this.x = x;
    this.y = y;
}

Ball.prototype.showBody = function () {

    P.noStroke();
    var color = P.color(0,0,100,100);
    P.fill(color);
    P.ellipse(this.x, this.y, 4, 4);
}

Ball.prototype.showLinks = function (balls) {

    var self = this;
    var color = P.color(60,100,100,100);
    P.stroke(color);
    P.strokeWeight(0.05);
    _.each(balls, function (ball){
        P.line(self.x,self.y,ball.x,ball.y);
    });
}