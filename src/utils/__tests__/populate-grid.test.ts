import { expect, test } from "vitest";
import { populateGrid } from "../populate-grid";

test("populateGrid returns the correct grid for a 3x3 case", () => {
  const grid = populateGrid(3, 3);
  expect(grid).toEqual([
    [1, 1, 1],
    [1, 2, 3],
    [1, 3, 6],
  ]);
});
