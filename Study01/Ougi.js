var Ougi = function (x, y) {
    this.x = x;
    this.y = y;

    this.spread(Math.PI / 4);

}

Ougi.prototype.spread = function (width) {

    var noise = P.noise(this.x / P.width, this.y / P.height);
    var radius = 10 ;
    var step = 2 * Math.PI / 200;
    
    width += noise * 4 -2;

    for (var radian = -width +(step/2) + Math.PI; radian < width -(step/2) + Math.PI; radian += step) {

        var target = this.getPoint(radian, radius);

        P.stroke(P.color(0,0,0));
        P.line(this.x, this.y, target.x, target.y);
        
        P.stroke(P.color(0,0,100));
        var target2 = this.getPoint(radian, radius + 10);
        P.line(target.x, target.y, target2.x, target2.y);
        
        P.stroke(P.color(60,100,100));
        var target3 = this.getPoint(radian, radius + 12 + 2);
        P.line(target2.x, target2.y, target3.x, target3.y);
        
        
//        P.fill(P.color(0,0,100,100));
//        P.noStroke();
//        P.rect(target_x, target_y,2,2);

    }
//    
//    P.fill(P.color(0,0,100));
//    P.noStroke();
//    P.ellipse(this.x, this.y - 60, 20,20);



}

Ougi.prototype.getPoint = function(radian, radius) {
    
    var point = new Object();
    point.x = (this.x + Math.sin(radian) * radius);
    point.y = (this.y + Math.cos(radian) * radius);
    return point;
}