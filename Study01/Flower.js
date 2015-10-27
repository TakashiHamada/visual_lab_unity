var Flower = function (x, y) {
    this.x = x;
    this.y = y;
    this.spread();
}
Flower.prototype.spread = function () {
    var step = 2 * Math.PI / 100;
    var noise = P.noise(this.x / P.width, this.y / P.height);
    this.x += noise * 200 - 100;
    if (noise < 0.44) {
        P.stroke(P.color(0, 0, 80));
        P.fill(P.color(0, 0, 0, noise));
        var r = _.random(1, 30);
        P.ellipse(this.x, this.y, r, r);
        P.stroke(P.color(0, 0, 40));
        P.ellipse(this.x, this.y, r - 5, r - 5);
    }
    for (var radian = 0; radian < Math.PI * 2; radian += step) {
        var radius = noise * 140 - 45;
        var target_x = this.x + Math.sin(radian) * radius;
        var target_y = this.y + Math.cos(radian) * radius;
        P.strokeWeight(0.8);
        P.stroke(P.color(0, 0, 100, 0.2));
        P.line(this.x, this.y, target_x, target_y);
    }
    if (noise > 0.5) {
        P.noStroke();
        P.fill(P.color(60, 100, 100));
        P.ellipse(this.x, this.y, 2, 2);
        P.stroke(P.color(0, 0, 100));
        P.strokeWeight(0.6);
        P.noFill();
        P.ellipse(this.x, this.y, 12, 12);
    }
    if (noise > 0.53) {
        P.noStroke();
        P.fill(P.color(00, 100, 100));
        P.ellipse(this.x, this.y, 4, 4);
        for (var radian = 0; radian < Math.PI * 2; radian += (step * 8)) {
            var radius = noise * 600 - 300;
            var target_x = this.x + Math.sin(radian) * radius;
            var target_y = this.y + Math.cos(radian) * radius;
            P.strokeWeight(0.8);
            P.stroke(P.color(0, 0, 100, 0.4));
            P.line(this.x, this.y, target_x, target_y);
        }
    }
    if (noise > 0.550) {
        for (var radian = 0; radian < Math.PI * 2; radian += (step * 8)) {
            var radius = noise * 600 - 300;
            var target_x = this.x + Math.sin(radian) * radius;
            var target_y = this.y + Math.cos(radian) * radius;
            P.strokeWeight(0.8);
            P.stroke(P.color(10, 100, 60, noise* 0.8));
            P.line(this.x, this.y, target_x, target_y);
        }
    }
    if (noise > 0.534) {
        P.noFill();
        P.strokeWeight(0.8);
        P.stroke(P.color(0, 0, 100, 0.8));
        P.ellipse(this.x, this.y, 22, 22);
    }
}