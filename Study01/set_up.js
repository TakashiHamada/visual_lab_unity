var P = null;
function sketchProc(prosessing) {
    
    P = prosessing;
    
    P.setup = function () {
        P.colorMode(P.HSB, 360, 100, 100,1);
        createFiled();
    }

    function createFiled() {
        P.background(0, 0, 100,1);
        P.size(400, 400);

//        new PixelManager(150);
        new CellManager(40,40);
    }
}

var canvas = document.getElementById("stage");
var processingInstance = new Processing(canvas, sketchProc);