import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
function App() {
   const [activePlayer,setActivePlayer]=useState('X');
    function togglePlayer(){
      'X'===activePlayer&&setActivePlayer('O');
      'O'===activePlayer&&setActivePlayer('X');
    }
  return (

    <>
      <main>
        <div className="" id="game-container">
          <ol id="players" className="highlight-player">
            <Player name="Player 1" symbol="O" isActive={'O'===activePlayer}/>
            <Player name="Player 2" symbol="X" isActive={'X'===activePlayer} />
            {/* TOTALLY DIFFERENT ISOLATED INSTANCES ARE CREATED IN THE ABOVE CASE */}
          </ol>
          <GameBoard togglePlayer={togglePlayer}  activePlayerSymbol={activePlayer}/>
        </div>
      </main>
    </>
  );
}

export default App;
