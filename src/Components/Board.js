import React, { useState } from "react";
import Cell from "./Cell";

import "./Board.css";

const Board = () => {
  const [sign, setSign] = useState("X");
  const [cells, setCells] = useState(new Array(9).fill(""));

  const userInput = (cellNum) => {
    if (cells[cellNum] != "") {
      return;
    }

    let playBoard = [...cells];

    if (sign === "X") {
      setSign("O");
      playBoard[cellNum] = "x";
    } else {
      setSign("X");
      playBoard[cellNum] = "o";
    }

    setCells(playBoard);
    console.log(playBoard)
  };

  

  const resetBoard = () => {
    setCells(new Array(9).fill(""));
  };

  return (
    <div>
      <p>Tic Tac Toe `Player {sign} turn`</p>
      <div className="row">
        <Cell num={0} onUserInput={userInput} cells={cells} />
        <Cell num={1} onUserInput={userInput} cells={cells} />
        <Cell num={2} onUserInput={userInput} cells={cells} />
      </div>
      <div className="row">
        <Cell num={3} onUserInput={userInput} cells={cells} />
        <Cell num={4} onUserInput={userInput} cells={cells} />
        <Cell num={5} onUserInput={userInput} cells={cells} />
      </div>
      <div className="row">
        <Cell num={6} onUserInput={userInput} cells={cells} />
        <Cell num={7} onUserInput={userInput} cells={cells} />
        <Cell num={8} onUserInput={userInput} cells={cells} />
      </div>
      <div className="bottomContent">
        <button onClick={resetBoard}>Reset the Board</button>
      </div>
    </div>
  );
};

export default Board;
