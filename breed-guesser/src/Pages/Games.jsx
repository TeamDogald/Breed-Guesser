import React from "react";
import { Link } from "react-router-dom";

const Games = () => {
  return (
    <section>
      <h2>Games</h2>
      <div className="games-grid">
        <div>
          <Link to="guesser">Breed Guesser</Link>
          <p>Guess the correct breed from a set of options.</p>
        </div>
        <div>
          <Link to="memory">Match Doggy Pair</Link>
          <p>Flip cards to find matching pairs of dogs.</p>
        </div>
        <div>
          <Link to="puzzle">Sliding Puzzle</Link>
          <p>Rearrange tiles to complete the dog picture.</p>
        </div>
      </div>
    </section>
  );
};

export default Games;
