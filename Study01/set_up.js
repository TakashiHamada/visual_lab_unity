var P = null;
function sketchProc(prosessing) {
    P = prosessing;
    P.setup = function () {
        P.colorMode(P.HSB, 360, 100, 100, 1);
        createFiled();
    }
    function createFiled() {
        P.background(P.color(4, 90, 90));
        P.size(1200, 800);
        new CellManager(36,29);
    }
}
var canvas = document.getElementById("stage");
var processingInstance = new Processing(canvas, sketchProc);