import styles from "./grid.module.css";

type SquareProps = {
  children?: React.ReactNode;
  isLast?: boolean;
};

function Square({ children, isLast }: SquareProps) {
  return (
    <div className={styles.square} data-is-last={isLast}>
      {children}
    </div>
  );
}

type GridProps = {
  x: number;
  y: number;
};

export function Grid({ x = 3, y = 3 }: GridProps) {
  const populateGrid = () => {
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
  };

  const grid = populateGrid();

  const isLast = (i: number, j: number) => {
    return i === y - 1 && j === x - 1;
  };

  console.table(grid);

  return (
    <div>
      Paths: {grid[y - 1][x - 1]}
      {grid.map((row, i) => (
        <div key={i} className={styles.row}>
          {row.map((cell, j) => (
            <Square key={cell} isLast={isLast(i, j)}>
              {cell}
            </Square>
          ))}
        </div>
      ))}
    </div>
  );
}
