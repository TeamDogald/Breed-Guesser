import React from "react";
import { Link } from "react-router-dom";

const Games = () => {
  return (
    <div>

        <ul>
            <li id='gameurl'>
            <Link to='/Games/memory'>Memory Games</Link>

            </li>
        </ul>

    </div>
  );
};

export default Games;
