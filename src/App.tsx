import "./App.css";
import { Question1 } from "./components/question1";

function App() {
  return (
    <>
      <section id="spacer"></section>
      <div className="ticks"></div>

      <h1>Centripetal Take Home</h1>

      <div className="ticks"></div>
      <section id="spacer"></section>

      <section id="center">
        <div>
          <h2>Question 1</h2>
          <p style={{ maxWidth: "50ch" }}>
            Starting from the top left cell. You can only move down or right.
            Calculate the number of ways you can navigate (paths) from the top
            left cell to all cells in a X by Y grid.
          </p>
        </div>

        <Question1 />
      </section>

      <section id="spacer"></section>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
