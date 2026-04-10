export function populateGrid(x: number, y: number): number[][] {
  const grid: number[][] = [[]];

  const calculatePaths = (i: number, j: number) => {
    const above = grid[i - 1][j];
    const left = grid[i][j - 1];
    return above + left;
  };

  for (let i = 0; i < y; i++) {
    grid[i] = [];

    for (let j = 0; j < x; j++) {
      if (i === 0 || j === 0) {
        grid[i][j] = 1;
        continue;
      }

      grid[i][j] = calculatePaths(i, j);
    }
  }

  return grid;
}
