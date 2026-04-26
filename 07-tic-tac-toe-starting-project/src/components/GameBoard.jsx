import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({togglePlayer,activePlayerSymbol}) {
  const [board, setBoard] = useState(initialGameBoard);
  // const [isX,setIsX]=useState(true);
  const [count,setCount]=useState(9);
  function handleSelect(rowIndex, colIndex) {
    if(0===count){
      return;
    }
    setCount((count)=>{
      return count-1;
    })

    setBoard((board) => {
      const temp = [ ...board.map((innerArray) => [...innerArray]) ];

     temp[rowIndex][colIndex] = activePlayerSymbol;
      // setIsX(!isX);
      console.log(temp)
      return temp;
    });
    togglePlayer();
  }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => {
        return (
          <div key={rowIndex}>
            <ol>
              {row.map((symbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button onClick={() => handleSelect(rowIndex, colIndex)}>
                      {symbol}
                    </button>
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
