import { populateGrid } from "../utils/populate-grid";
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
  const grid = populateGrid(x, y);

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
            <Square key={`cell-${i}-${j}`} isLast={isLast(i, j)}>
              {cell}
            </Square>
          ))}
        </div>
      ))}
    </div>
  );
}
