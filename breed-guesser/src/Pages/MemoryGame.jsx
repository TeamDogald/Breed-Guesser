import { useState } from "react";
import Cards from "../Components/MemoryGame/Cards";
import "../Components/MemoryGame/Memory.css";

const MemoryGame = () => {
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(false);

  const handleScore = () => setScore(score + 1);
  const handleMove = () => setMoves(moves + 1);
  const handleWin = () => setGameWon(true);
  const handleReset = () => {
    setScore(0);
    setMoves(0);
    setGameWon(false);
    setResetTrigger(prev => !prev);
  };

  return (
    <section className="memory">
      <h1 className="memory-title">Match the Doggy Pair</h1>

      <div className="memory-controls">
        <span>Score: {score}</span>
        <span>Moves: {moves}</span>
        <button onClick={handleReset}>Reset</button>
      </div>

      <Cards
        onScore={handleScore}
        onMove={handleMove}
        onWin={handleWin}
        resetTrigger={resetTrigger}
      />

      {gameWon && (
        <div className="memory-victory">
          <h2>You won! 🎉</h2>
          <button onClick={handleReset}>Play Again</button>
        </div>
      )}
    </section>
  );
};

export default MemoryGame;
