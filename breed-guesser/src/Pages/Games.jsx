import React from "react";
import { Link } from "react-router-dom";
import "./Games.css";

const Games = () => {
  return (
    <section className="games-section">
      <h2>Games</h2>
      <div className="game-list">
        <div className="game-card left">
          <div className="game-icon">🐶</div>
          <div className="game-info">
            <h3>Breed Guesser</h3>
            <p>Guess the correct breed from a set of options.</p>
            <Link to="guesser" className="play-btn">Play</Link>
          </div>
        </div>

        <div className="game-card right">
          <div className="game-icon">🃏</div>
          <div className="game-info">
            <h3>Match Doggy Pair</h3>
            <p>Flip cards to find matching pairs of dogs.</p>
            <Link to="memory" className="play-btn">Play</Link>
          </div>
        </div>

        <div className="game-card left">
          <div className="game-icon">🧩</div>
          <div className="game-info">
            <h3>Sliding Puzzle</h3>
            <p>Rearrange tiles to complete the dog picture.</p>
            <Link to="puzzle" className="play-btn">Play</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;
