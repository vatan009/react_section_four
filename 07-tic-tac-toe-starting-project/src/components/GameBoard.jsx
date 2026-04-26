const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return (
    <ol id="game-board">

 {initialGameBoard.map((row, rowIndex) => {
  return (
    <div key={rowIndex}>
      <ol>
        {row.map((symbol, colIndex) => {
          return (
            <li key={colIndex}>
              <button>{symbol}</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
})}
    </ol>


  );
}
