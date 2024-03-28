import React from "react";
import { Link } from "react-router-dom";

const Games = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Games/memory">Memory Games</Link>
        </li>
        <li>
          <Link to="/Games/slidingPuzzle">Sliding Puzzle</Link>
        </li>
      </ul>
    </div>
  );
};

export default Games;
