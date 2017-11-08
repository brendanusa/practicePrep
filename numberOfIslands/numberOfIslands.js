const numIslands = (grid) => {
  var counter = 0;

  const search = (y, x) => {
    // if val === 0 return
    // if (grid[y][x] === '0') {
    //   return;
    // }

    // if val === 1
    if (grid[y][x] === '1') {
      // turn it 0
      grid[y][x] = '0';
      // search its right neighbor
      grid[y][x + 1] ? search(y, x + 1) : null;
      // search its downstairs neighbor
      grid[y + 1] && grid[y + 1][x] ? search(y + 1, x) : null;
      // search upstairs neighbor
      grid[y - 1] && grid[y - 1][x] ? search(y - 1, x) : null;
      // search left neighbor
      grid[y][x - 1] ? search(y, x - 1) : null;
    }
  }

  // iterate through grid
  // if val === 1 perform search
  grid.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell === '1') {
        search(y, x);
        counter++;
      }
    })
  })
  // counter++


  return counter;
};

var grid1 = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]]

// console.log(numIslands(grid1) === 1)

var grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]]

// console.log(numIslands(grid2))

var grid3 = [
  ["1","1","1"],
  ["0","1","0"],
  ["1","1","1"]]

console.log(numIslands(grid3))