import { useState } from "react";
import "./App.css";
import { Button } from "./components/button";
import { Grid } from "./components/grid";
import { Input } from "./components/input";

function App() {
  const [x, setX] = useState(3);
  const [y, setY] = useState(3);

  return (
    <>
      <section id="center">
        <div>
          <h1>Question 1</h1>
          <p style={{ maxWidth: "50ch" }}>
            Starting from the top left cell. You can only move down or right.
            Calculate the number of ways you can navigate (paths) from the top
            left cell to all cells in a X by Y grid.
          </p>
        </div>

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
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
