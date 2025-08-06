import { useEffect, useState } from "react";
import handleFetch from "../Utils/handleFetch";
import Boards from "../Components/PuzzleGame/Boards";
import "./SlidingPuzzle.css";

const RandomImgUrl = "https://dog.ceo/api/breeds/image/random";

const SlidingPuzzle = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const doFetch = async () => {
      setLoading(true);
      const [data, fetchError] = await handleFetch(RandomImgUrl);
      if (data) setImgUrl(data.message);
      if (fetchError) setError(fetchError);
      setLoading(false);
    };
    doFetch();
  }, []);

  return (
    <main className="puzzle-container">
      <h2 className="puzzle-title">Sliding Puzzle</h2>

      {loading && <p className="status">Loading image...</p>}
      {error && <p className="status error">Error: {typeof error === "string" ? error : error.message}</p>}

      {imgUrl && !error && (
        <div className="puzzle-board-wrapper">
          <Boards imgUrl={imgUrl} />
        </div>
      )}
    </main>
  );
};

export default SlidingPuzzle;
