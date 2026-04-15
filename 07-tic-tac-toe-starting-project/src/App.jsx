import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
function App() {
  return (
    <>
      <main>
        <div className="" id="game-container">
          <ol id="players">
            <Player name="Player 1" symbol="O" />
            <Player name="Player 2" symbol="X" />
            {/* TOTALLY DIFFERENT ISOLATED INSTANCES ARE CREATED IN THE ABOVE CASE */}
          </ol>
          <GameBoard />
        </div>
      </main>
    </>
  );
}

export default App;
