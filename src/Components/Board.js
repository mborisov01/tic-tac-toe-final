import React, { useState } from "react";

import Cell from "./Cell";
import Header from "./Header";

import "./Board.css";

const Board = () => {
  // Set states
  const [playerWin, setplayerWin] = useState();
  const [sign, setSign] = useState("X");
  const [cells, setCells] = useState(new Array(9).fill(""));

  // Check if someone wins
  const winner = (playBoard) => {
    // This object contains the winning patterns
    const winningPatterns = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    // Loops through the winningPatterns object and compares them with users inputs
    for (let pattern in winningPatterns) {
      winningPatterns[pattern].forEach((patt) => {
        if (
          playBoard[patt[0]] === "" ||
          playBoard[patt[1]] === "" ||
          playBoard[patt[2]] === ""
        ) {
        } else if (
          playBoard[patt[0]] === playBoard[patt[1]] &&
          playBoard[patt[1]] === playBoard[patt[2]]
        ) {
          // sets winner state if there is a match
          setplayerWin(playBoard[patt[0]]);
        }
      });
    }
  };

  // Takes the user input and save it in a new array
  // Change the input state
  const userInput = (cellNum) => {
    if (cells[cellNum] !== "") {
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

    // Call the winner function
    winner(playBoard);
    setCells(playBoard);
  };

  // Reset the board
  const resetBoard = () => {
    setCells(new Array(9).fill(""));
    setplayerWin("");
  };

  return (
    <div>
      <div className="board-holder">
        <Header player={sign} />
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
      </div>

      <div className="bottomContent">
        <span>
          <button className="btn btn-reset" onClick={resetBoard}>
            Reset the Board
          </button>
        </span>
        {playerWin && (
          <span>
            <p>
              Player <span className="winner-label">{playerWin}</span> has won
              the game
            </p>
            <button className="btn btn-reset" onClick={resetBoard}>
              Play new game?
            </button>
          </span>
        )}
      </div>
    </div>
  );
};

export default Board;
