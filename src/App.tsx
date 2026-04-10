import "./App.css";
import { Question1 } from "./components/question1";
import { Question2 } from "./components/question2";

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

      <section id="center">
        <div>
          <h2>Question 2</h2>
          <p style={{ maxWidth: "50ch" }}>
            The user wants to know what the top 3 values are for each attribute
            in this data and their tally. Create a JS program that can take in a
            list of intelligence data and produce a data structure you believe
            will represent what the user is asking for best.
          </p>
        </div>

        <Question2 />
      </section>

      <section id="spacer"></section>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
