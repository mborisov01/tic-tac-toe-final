const Header = (props) => {
  return (
    <div>
      <h1>Play "Tic Tac Toe"</h1>
      <p>Player's {props.player} turn</p>
    </div>
  );
};

export default Header;
