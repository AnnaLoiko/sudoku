module.exports = function solveSudoku(matrix) {
  
  sudoku(matrix);  
  return matrix;

  function sudoku(matrix) {
    let unknownCell = findUnknownCell(matrix);
    if ( unknownCell.length == 0 ) return true;
    let row = unknownCell[0];
    let col = unknownCell[1];
   
    for ( let number = 1 ; number <= 9 ; number++ ) { 
      if ( checkThisNumber(matrix, row, col, number) == true ) {   
        matrix[row][col] = number;  
        if ( sudoku(matrix) == true ) {
          return true;
        }
        matrix[row][col] = 0;
      }
    }
    return false;
  }

  function findUnknownCell(matrix) {
    let unknownCell = [];
    for ( let row = 0 ; row < 9 ; row++ ) {
      for ( let col = 0 ; col < 9 ; col++ ){
        if ( matrix[row][col] == 0 ) {
          return unknownCell = [row, col];
        }
      }
    }
    return unknownCell;
  }

  function checkThisNumber(matrix, row, col, number) {
    if (  ( checkRow(matrix, row, number) == true ) &&
          ( checkCol(matrix, col, number) == true ) && 
          ( checkSmallSquare(matrix, row, col, number) == true ) )
    {
      return true;
    } 
  }

  function checkRow(matrix, row, number) {
    for ( let col = 0 ; col < 9; col++ ) {
      if ( matrix[row][col] == number ) {
        return false;
      }
    }
    return true;
  }

  function checkCol(matrix, col, number) {
    for ( let row = 0 ; row < 9 ; row++ ){
      if ( matrix[row][col] == number ) {
        return false;
      }
    }
    return true;    
  }

  function checkSmallSquare(matrix, row, col, number) {
    rowSmallSquare = Math.floor(row / 3) * 3;
    colSmallSquare = Math.floor(col / 3) * 3;
    for ( let i = 0 ; i < 3 ; i++ ){
      for ( let j = 0 ; j < 3 ; j++ ) {
        if ( matrix[rowSmallSquare + i][colSmallSquare + j] == number ) {
          return false;
        }
      }
    }
    return true;
  }

}
