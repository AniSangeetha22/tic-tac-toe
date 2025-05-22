import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [winner, setWinner] = useState("");
  const [char, setChar] = useState("x");
  const [matrix, setMatrix] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const getbgcolor = (value) => {
    if (value === "x") return "xbgcolor";
    if (value === "o") return "obgcolor";
    return "";
  };

  const checkwinner = () => {
    if (
      matrix[0][0] &&
      matrix[0][0] === matrix[0][1] &&
      matrix[0][1] === matrix[0][2]
    ) {
      setWinner(matrix[0][0] + " is the Winner");
    }
    if (
      matrix[1][0] &&
      matrix[1][0] === matrix[1][1] &&
      matrix[1][1] === matrix[1][2]
    ) {
      setWinner(matrix[1][0] + " is the Winner");
    }
    if (
      matrix[2][0] &&
      matrix[2][0] === matrix[2][1] &&
      matrix[2][1] === matrix[2][2]
    ) {
      setWinner(matrix[2][0] + " is the Winner");
    }
    //Check column winner
    if (
      matrix[0][0] &&
      matrix[0][0] === matrix[1][0] &&
      matrix[1][0] === matrix[2][0]
    ) {
      setWinner(matrix[0][0] + " is the Winner");
    }
    if (
      matrix[0][1] &&
      matrix[0][1] === matrix[1][1] &&
      matrix[1][1] === matrix[2][1]
    ) {
      setWinner(matrix[0][1] + " is the Winner");
    }
    if (
      matrix[0][2] &&
      matrix[0][2] === matrix[1][2] &&
      matrix[1][2] === matrix[2][2]
    ) {
      setWinner(matrix[0][2] + " is the Winner");
    }
    //diagnal
    if (
      matrix[0][0] &&
      matrix[0][0] === matrix[1][1] &&
      matrix[1][1] === matrix[2][2]
    ) {
      setWinner(matrix[0][0] + " is the Winner");
    }
    if (
      matrix[0][2] &&
      matrix[0][2] === matrix[1][1] &&
      matrix[1][1] === matrix[2][0]
    ) {
      setWinner(matrix[2][0] + " is the Winner");
    }

    if (count === 9) {
      setWinner("Match has been Draw");
    }
  };
  const handleClick = (r, c) => {
    if (matrix[r][c]) return;
    const tempMatrix = [...matrix];
    tempMatrix[r][c] = char;
    setMatrix(tempMatrix);
    setChar(char === "x" ? "o" : "x");
    setCount(count + 1);
    checkwinner();
  };

  return (
    <div className="app">
      <div className="header aligncenter">Tic Tac Toe</div>
      <div className="aligncenter board">
        {char} turn now
        <div className="gameboard">
          {winner}

          {matrix.map((row, rindex) => (
            <div className="row">
              {row.map((cell, cindex) => (
                <div
                  onClick={() => handleClick(rindex, cindex)}
                  className={`cell aligncenter ${getbgcolor(
                    matrix[rindex][cindex]
                  )}`}
                >
                  {matrix[rindex][cindex]}
                </div>
              ))}
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            setWinner("");
            setMatrix([
              ["", "", ""],
              ["", "", ""],
              ["", "", ""],
            ]);
          }}
        >
          Restart The game
        </button>
      </div>
    </div>
  );
}

export default App;
