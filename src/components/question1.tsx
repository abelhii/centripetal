import { useState } from "react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Grid } from "./grid";

export function Question1() {
  const [x, setX] = useState(3);
  const [y, setY] = useState(3);

  return (
    <>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          setX(Number(formData.get("x")) || 1);
          setY(Number(formData.get("y")) || 1);
        }}
      >
        <Input
          label="X"
          id="x"
          type="number"
          name="x"
          min={1}
          defaultValue={x}
        />
        <Input
          label="Y"
          id="y"
          type="number"
          name="y"
          min={1}
          defaultValue={y}
        />
        <Button type="submit">Populate grid</Button>
      </form>

      <Grid x={x} y={y} />
    </>
  );
}
