import { useEffect, useState } from "react";
import handleFetch from "../utils/handleFetch";
import Boards from "../Components/boards";

const RandomImgUrl = `https://dog.ceo/api/breeds/image/random`;

const SlidingPuzzle = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const doFetch = async () => {
      try {
        const response = await handleFetch(RandomImgUrl);
        setImgUrl(response.data.message);
      } catch (error) {
        setError(error.message);
      }
    };
    doFetch();
  }, []);

  return (
    <div className="puzzleContainer">
      <h1>Sliding Puzzle</h1>
      <Boards imgUrl={imgUrl} />
    </div>
  );
};

export default SlidingPuzzle;
