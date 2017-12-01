class Board {

  constructor(n) {
    this.n = n;
    this.matrix = new Array(n).fill([]).map(row => new Array(n).fill('.'));
  }

  solve() {

    let solutions = [];

    let availableRows = {};
    let availableColumns = {};
    let availableDiagRight = {};
    let availableDiagLeft = {};

    let k = 0

    while (k < this.n) {
      availableRows[k] = 1;
      availableColumns[k] = 1;
      availableDiagRight[k] = 1;
      availableDiagLeft[k] = 1;
      availableDiagRight[this.n * 2 - 1 - k] = 1;
      availableDiagLeft[this.n * 2 - 1 - k] = 1;
      k++;
    }

    let queens = [];

    // column of initial queen
    let startColumn = 0;

    var checkOneCell = (x, y) => {
      if (availableRows[x] && availableColumns[y] && availableDiagRight[this.n - 1 - x + y] && availableDiagLeft[x + y]) {
        return true;
      }
      return false;
    }

    var removeLastQueen = () => {
      let x = queens[queens.length - 1][0];
      let y = queens[queens.length - 1][1];
      this.matrix[x][y] = '.';
      availableRows[x] = 1;
      availableColumns[y] = 1;
      availableDiagRight[this.n - 1 - x + y] = 1;
      availableDiagLeft[x + y] = 1;
      queens.pop();
    }

    // var restart = () => {
    //   while (queens.length > 0) {
    //     removeLastQueen();
    //   }
    //   placeQueen(0, startColumn);
    // }

    var checkEachCell = (x, y) => {

      var iterateLastQueen = () => {
        if (queens.length > 0) {
          x = queens[queens.length - 1][0];
          y = queens[queens.length - 1][1] + 1;
          removeLastQueen();
          // if previous queen was in last cell in row...
          if (y === this.n) {
            iterateLastQueen();
          } else {
            checkEachCell(x, y);
          }
        } else {
          startColumn++;
          if (startColumn >= this.n) {
            return;
          }
          placeQueen(0, startColumn);
        }
      }

      if (x < this.n) {
        // in this row
        while (y < this.n) {
          // check this cell
          if (checkOneCell(x, y)) {
            // if available, place queen at this cell
            return placeQueen(x, y);
          }
          // move to next cell in row
          y++;
        }
        // if no queens placed in x row, move previous queen to next cell
        iterateLastQueen();
        // checkEachCell(x + 1, 0);
      } else {
        if (queens.length > 0) {
          iterateLastQueen();
        } else {
          startColumn++;
          if (startColumn >= this.n) {
            return;
          }
          placeQueen(0, startColumn);
        }
      }
    }

    var placeQueen = (x, y) => {
      // update board
      this.matrix[x][y] = 'Q';

      // update queens list
      queens.push([x, y]);

      // update available cells
      delete availableRows[x];
      delete availableColumns[y];
      delete availableDiagRight[this.n - 1 - x + y];
      delete availableDiagLeft[x + y];

      // if this is the nth queen on the board, add board to solutions
      if (queens.length === this.n) {
        solutions.push(this.matrix);
      }

      // if queen was placed in the bottom row...
      if (x === this.n - 1) {
        console.log(y)
        // console.log(board.matrix)
        console.log(solutions)
        removeLastQueen();
        x = queens[queens.length - 1][0];
        y = queens[queens.length - 1][1] + 1;
        removeLastQueen();

        // if previous queen was in last cell in row...
        if (y === this.n) {
          x = queens[queens.length - 1][0];
          y = queens[queens.length - 1][1] + 1;
          removeLastQueen();
        }
        checkEachCell(x, y);
      }

      // move to next row
      checkEachCell(x + 1, 0);
    }

    placeQueen(0, 0);

    return solutions;

  }

}

var board = new Board(4);
console.log(board.solve());