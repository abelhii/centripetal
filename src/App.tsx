import "./App.css";
import { Question1 } from "./components/question1";
import { Question2 } from "./components/question2";
import githubIcon from "./assets/GitHub_Invertocat_Black.png";

function App() {
  return (
    <>
      <section className="header">
        <a
          href="https://github.com/abelhii/centripetal"
          title="Centripetal Take Home Github Repo"
          target="_blank"
        >
          <img src={githubIcon} alt="Github" className="icon" />
        </a>
        <a
          href="https://docs.google.com/document/d/1XK_fUmGm5ACuC2ltN_peJbqkwMvyQ9BKxO4ZzZmHZ10/edit?usp=sharing"
          title="Abel Hii Resume"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="icon"
          >
            {/* <!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--> */}
            <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-277.5c0-17-6.7-33.3-18.7-45.3L258.7 18.7C246.7 6.7 230.5 0 213.5 0L64 0zM325.5 176L232 176c-13.3 0-24-10.7-24-24L208 58.5 325.5 176z" />
          </svg>
        </a>
      </section>
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
