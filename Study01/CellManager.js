var CellManager = function (row, column) {
 
    var cell_width = P.width / column;
    var cell_height = P.height / row;
    
    var cells = new Array();
    
    for(var r = 0; r < row; r++){
        for(var c = 0; c < column; c++){
//            var cell = new Cell(c * cell_width, r * cell_height);
            var cell = new Flower(c * cell_width, r * cell_height);
            
            
            cells.push(cell);
        }
    }
    
    _.each(cells, function(cell){
        
//        cell.showBody();
//        cell.showLinks(cells);
        
    });
    
    
}