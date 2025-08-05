import { getMatrixPosition, getVisualPosition } from "../../Utils/puzzleHelper";

const Tile = ({ tile, index, width, height, imgUrl, handleTileClick }) => {
  const { row, col } = getMatrixPosition(index);
  const { x, y } = getVisualPosition(row, col, height, width);

  const tileRow = Math.floor(tile / 4);
  const tileCol = tile % 4;

  const style = {
    width: `${width}px`,
    height: `${height}px`,
    transform: `translate3d(${x}px, ${y}px, 0)`,
    backgroundImage: tile === 15 ? "none" : `url(${imgUrl})`,
    backgroundSize: `${width * 4}px ${height * 4}px`,
    backgroundPosition: `-${tileCol * width}px -${tileRow * height}px`,
    border: "1px solid #ccc",
    boxSizing: "border-box",
    position: "absolute",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  };

  return <li style={style} onClick={() => handleTileClick(index)} />;
};

export default Tile;