var Tree = function (x, y) {
    this.x = x;
    this.y = y;
    
    this.growUp();
}

Tree.prototype.growUp = function () {
    
    P.stroke(P.color(0, 0, 100));
    P.strokeWeight(2);
    
    
    for(var i =0; i <20; i++){
        
        var target_x = this.x + P.random(-20,20);
        var target_y = this.y - 20;
        
        P.line(this.x, this.y , target_x, target_y);
        
        this.x = target_x;
        this.y = target_y;
    }
    
}