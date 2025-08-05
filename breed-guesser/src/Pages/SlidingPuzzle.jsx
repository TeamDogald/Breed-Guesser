import { useEffect, useState } from "react";
import handleFetch from "../Utils/handleFetch";
import Boards from "../Components/PuzzleGame/Boards";

const RandomImgUrl = `https://dog.ceo/api/breeds/image/random`;

const SlidingPuzzle = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const doFetch = async () => {
      const [data, fetchError] = await handleFetch(RandomImgUrl);
      if (data) setImgUrl(data.message);
      if (fetchError) setError(fetchError);
    };
    doFetch();
  }, []);

  return (
    <div className="puzzleContainer">
      <h1>Sliding Puzzle</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {imgUrl && <Boards imgUrl={imgUrl} />}
    </div>
  );
};

export default SlidingPuzzle;
