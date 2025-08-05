import React from "react";
import { Link } from "react-router-dom";

const Games = () => {
  return (
    <div>

        <ul>
            <li id='gameurl'>
              <Link to='/Games/guesser'>Breed Guesser</Link>
            </li>
            <li id='gameurl'>
              <Link to='/Games/memory'>Match Doggy Pair</Link>
            </li>
            <li id='gameurl'>
              <Link to='/Games/puzzle'>Sliding Puzzle</Link>
            </li>
        </ul>

    </div>
  );
};

export default Games;
