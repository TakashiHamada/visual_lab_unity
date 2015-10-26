var HMD = function () {

}

HMD.prototype.palette = function () {

    
    var random = Math.random();
//    console.log(random);
    
//    return "";

//    if (random > 0.8) return P.color();
    if (random > 0.66) return P.color(48,77,100);
    if (random > 0.33) return P.color(0,0,0);
    if (random > 0.00) return P.color(0,0,100);
}

var H = new HMD();