var CellManager = function (row, column) {
    var cell_width = P.width / column;
    var cell_height = P.height / row;
    for(var r = 0; r < row; r++)
        for(var c = 0; c < column; c++)
            new Flower(c * cell_width, r * cell_height);
}