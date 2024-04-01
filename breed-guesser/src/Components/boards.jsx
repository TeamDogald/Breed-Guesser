import { GRID_SIZE, TILE_COUNT, BOARD_SIZE } from "./constants";
import { canSwap, shuffle, swap, isSolved } from "./helper";
import { useState } from "react";
import Tile from "./tiles";
function Boards() {
  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
  const [isStarted, setIsStarted] = useState(false);
  console.log("is started", isStarted);

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles);
    setTiles(shuffledTiles);
  };

  const swapTiles = (tileIndex) => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(
        tiles,
        tileIndex,
        tiles.indexOf(tiles.length - 1)
      );
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
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  };

  const hasWon = isSolved(tiles);

  return (
    <>
      <ul style={style} className="board">
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            // imgUrl={imgUrl}
            tile={tile}
            width={PieceWidth}
            height={PieceHeight}
            handleTileClick={handleTileClick}
          />
        ))}
      </ul>
      {hasWon && isStarted && <div>Puzzle solved 🧠 🎉</div>}
      {!isStarted ? (
        <button onClick={() => handleStartClick()}>Start game</button>
      ) : (
        <button onClick={() => handleShuffleClick()}>Restart game</button>
      )}
    </>
  );

  // return <h1>breed</h1>

}

export default Boards;
