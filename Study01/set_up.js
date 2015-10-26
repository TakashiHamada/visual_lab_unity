var P = null;

function sketchProc(prosessing) {

    P = prosessing;

    P.setup = function () {
        P.colorMode(P.HSB, 360, 100, 100, 1);
        createFiled();
    }


    function createFiled() {
        //        P.background(P.color(0));
        P.background(P.color(4, 90, 90));
        //        P.background(H.palette());
        P.size(900, 600);

        //        new PixelManager(150);
                new CellManager(24,19);

        //        var row = 5;
        //        var column = 5;
        //
        //        var cell_width = P.width / column;
        //        var cell_height = P.height / row;
        //
        //        for (var r = 0; r < row; r++) {
        //            for (var c = 0; c < column; c++) {
        //
        //                new Ougi(cell_width * r, cell_width * c);
        //            }
        //        }

//        _.times(6, function (index) {
//
//
//            P.fill = P.noFill();
//            P.stroke(P.color(0, 50, 100));
//            P.strokeWeight(20);
//            P.ellipse(200, 300 - (index * 40), 200, 50);
//
//            P.strokeWeight(4);
//            P.stroke(P.color(0, 20, 100));
//            P.ellipse(200, 290- (index * 40), 210, 50);
//
//        });


//        new Flower(200,200);


    }
}

var canvas = document.getElementById("stage");
var processingInstance = new Processing(canvas, sketchProc);