import { useState } from "react";
import Cards from "../Components/MemoryGame/Cards";
import "./MemoryGame.css";

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
      <h2 className="memory-title">Match the Doggy Pair</h2>

      <div className="memory-controls">
        <p>
          Score: <strong>{score}</strong> | Moves: <strong>{moves}</strong>
        </p>
        <br />
        <div className="memory-btn" onClick={handleReset}>Reset</div>
      </div>

      <Cards
        onScore={handleScore}
        onMove={handleMove}
        onWin={handleWin}
        resetTrigger={resetTrigger}
      />

      {gameWon && (
        <div className="memory-controls">
          <h2>You won! 🎉</h2>
          <div className="memory-btn" onClick={handleReset}>Play Again</div>
        </div>
      )}
    </section>
  );
};

export default MemoryGame;
