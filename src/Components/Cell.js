const Cell = (props) => {
  // Pass the cell number to the Board component
  const enetrValue = () => {
    props.onUserInput(props.num);
  };

  return (
    <div className="cell-holder" onClick={enetrValue}>
      <span>{props.cells[props.num]}</span>
    </div>
  );
};

export default Cell;
