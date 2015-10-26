var PixelManager = function (mount) {
    
    var self = this;
    self.pixels = new Array();
    
    for(var row = 0; row < P.height; row++){
        for(var column = 0; column < P.width; column++){
            
        var pixel = new Pixel(P.random(P.width),P.random(P.height));
//        pixel.showBody();
        self.pixels.push(pixel);
        }
    }
    
    _.times(P.height,function(){
        var row = new Array(P.width);
        self.pixels.push(row);
    });
    
    _.each(self.pixels,function(pixel){
//        if(pixel.radius > 32) pixel.showLinks(self.pixels);
        
    });
}