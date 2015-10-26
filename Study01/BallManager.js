var BallManager = function (mount) {
    
    var self = this;
    self.balls = new Array();
    _.times(P.height,function(){
        var row = new Array(P.width);
        self.balls.push(row);
    });
    
    
    console.log(self.balls);
    
    _.times(mount,function(){
//        var ball = new Ball(P.random(P.width),P.random(P.height));
//        ball.showBody();
//        self.balls.push(ball);
    });
    
    
    
    
    _.each(self.balls,function(ball){
//        ball.showLinks(self.balls);
    });
    
    
    
    _.each(self.balls,function(ball){
//        ball.showBody();
    });
}