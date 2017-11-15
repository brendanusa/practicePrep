class Board {

  constructor(n) {
    this.matrix = new Array(n).fill([]).map(row => new Array(n).fill('.'));
  }

  solve() {

    let solutions = [];

    let availableRows = {};
    let availableColumns = {};
    let availableDiagRight = {};
    let availableDiagLeft = {};

    let k = 0

    while (k < n) {
      availableRows[k] = 1;
      availableColumns[k] = 1;
      availableDiagRight[k] = 1;
      availableDiagLeft[k] = 1;
      availableDiagRight[n * 2 - 1 - k] = 1;
      availableDiagLeft[n * 2 - 1 - k] = 1;
      k++;
    }

    let queens = [];

    // column of initial queen
    let startColumn = 0;

    var checkOneCell = (x, y) => {
      if (availableRows[x] && availableColumns[y] && availableDiagRight[n - 1 - x + y] && availableDiagLeft[x + y]) {
        return true;
      }
      return false;
    }

    var removeQueen = (x, y) => {
      queens.pop();
      this.matrix[x][y] = '.';
      availableRows[x] = 1;
      availableColumns[y] = 1;
      availableDiagRight[n - 1 - x + y] = 1;
      availableDiagLeft[x + y] = 1;
    }

    var restart = () => {
      queens.forEach(queen => removeQueen(queen[0], queen[1]));
      placeQueen(0, startColumn)
    }

    var checkEachCell = (x, y) => {
      if (x < n) {
        while (y < n) {
          if (checkOneCell(x, y)) {
            return placeQueen(x, y);
          }
          y++;
        }
        checkEachCell(x + 1, 0);
      } else {
        let lastQueen = queens[queens.length - 1];
        removeQueen(lastQueen[0], lastQueen[1]);
        checkEachCell(lastQueen[0], lastQueen[1] + 1);
      }
    }

    var placeQueen = (x, y) => {
      this.matrix[x][y] = 'Q';
      queens.push([x, y]);

      if (queens.length === n) {
        solutions.push(this.matrix.toString());
        startColumn++;
        if (startColumn < n) {
          restart();
        } else {
          return;
        }
      }

      delete availableRows[x];
      delete availableColumns[y];
      delete availableDiagRight[n - 1 - x + y];
      delete availableDiagLeft[x + y];

      checkEachCell(x + 1);
    }

    placeQueen(0, 0);

  }

}

var board = new Board(2);

console.log(board.matrix)