import React, { useState } from "react";

const Cell = (props) => {

    const enetrValue = () => {
        props.onUserInput(props.num)
    }

  return (
    <div>
      <div className="cell-holder" onClick={enetrValue}>
        <span>{props.cells[props.num]}</span>
      </div>
    </div>
  );
};

export default Cell;
