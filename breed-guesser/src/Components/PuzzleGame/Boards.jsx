import { GRID_SIZE, TILE_COUNT, BOARD_SIZE } from "../../Utils/puzzleConstants";
import { canSwap, shuffle, swap, isSolved } from "../../Utils/puzzleHelper";
import { useState } from "react";
import Tile from "./Tile";
import "./Boards.css";

function Boards({ imgUrl }) {
  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
  const [isStarted, setIsStarted] = useState(false);

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles);
    setTiles(shuffledTiles);
  };

  const swapTiles = (tileIndex) => {
    const emptyIndex = tiles.indexOf(TILE_COUNT - 1);
    if (canSwap(tileIndex, emptyIndex)) {
      const swappedTiles = swap(tiles, tileIndex, emptyIndex);
      setTiles(swappedTiles);
    }
  };

  const handleTileClick = (index) => {
    swapTiles(index);
  };

  const handleShuffleClick = () => {
    shuffleTiles();
  };

  const handleStartClick = () => {
    shuffleTiles();
    setIsStarted(true);
  };

  const PieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const PieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);

  const hasWon = isSolved(tiles);

  return (
    <div>
      <ul className="board" style={{ width: BOARD_SIZE, height: BOARD_SIZE }}>
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            tile={tile}
            width={PieceWidth}
            height={PieceHeight}
            imgUrl={imgUrl}
            handleTileClick={handleTileClick}
          />
        ))}
      </ul>
      <div className="puzzle-btns">
        {hasWon && isStarted && <div>Puzzle solved 🧠 🎉</div>}
        {!isStarted ? (
          <div>
            <button className="puzzle-btn" onClick={handleStartClick}>Start game</button>
          </div>
        ) : (
          <div>
            <button className="puzzle-btn" onClick={handleShuffleClick}>Restart game</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Boards;