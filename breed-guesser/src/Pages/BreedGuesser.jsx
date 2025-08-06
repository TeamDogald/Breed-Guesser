import { useEffect, useState } from "react";
import handleFetch from "../Utils/handleFetch";
import GuessCard from "../Components/GuessCard";
import { Link } from "react-router-dom";
import "./BreedGuesser.css";

export default function BreedGuesser() {
  const [breeds, setBreeds] = useState([]);
  const [images, setImages] = useState({});
  const [loadingImages, setLoadingImages] = useState({});
  const [error, setError] = useState(null);

  const [currentBreed, setCurrentBreed] = useState(null);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });

  const [guessMade, setGuessMade] = useState(false);
  const [lastGuessCorrect, setLastGuessCorrect] = useState(null);

  useEffect(() => {
    const getBreeds = async () => {
      const [data, error] = await handleFetch("https://dog.ceo/api/breeds/list/all");
      if (error) {
        setError("Failed to load breeds");
        return;
      }

      const breedList = Object.keys(data.message);
      setBreeds(breedList);

      const imagePromises = breedList.map(async (breed) => {
        setLoadingImages((prev) => ({ ...prev, [breed]: true }));
        const [imgData] = await handleFetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        setLoadingImages((prev) => ({ ...prev, [breed]: false }));
        return [breed, imgData?.message || null];
      });

      const breedImages = await Promise.all(imagePromises);
      const imagesObj = Object.fromEntries(breedImages);
      setImages(imagesObj);

      setCurrentBreed(breedList[Math.floor(Math.random() * breedList.length)]);
    };

    getBreeds();
  }, []);

  const handleGuess = (guess) => {
    if (guessMade) return;

    const correct = guess === currentBreed;

    setLastGuessCorrect(correct);
    setGuessMade(true);

    if (correct) {
      setScore((s) => ({ ...s, correct: s.correct + 1 }));
    } else {
      setScore((s) => ({ ...s, wrong: s.wrong + 1 }));
    }
  };

  const handleNext = () => {
    if (breeds.length === 0) return;

    let nextBreed;
    do {
      nextBreed = breeds[Math.floor(Math.random() * breeds.length)];
    } while (nextBreed === currentBreed && breeds.length > 1);

    setCurrentBreed(nextBreed);
    setGuessMade(false);
    setLastGuessCorrect(null);
  };

  if (error) return <p className="error">{error}</p>;
  if (!currentBreed || !images[currentBreed]) return <p>Loading...</p>;

  return (
    <div className="breed-guesser-container">
      <h1 className="title">Breed Guesser</h1>
      <p className="score">
        Correct: <strong>{score.correct}</strong> | Wrong: <strong>{score.wrong}</strong>
      </p>

      <GuessCard
        breed={currentBreed}
        image={images[currentBreed]}
        breeds={breeds}
        onGuess={handleGuess}
        loadingImages={loadingImages}
        guessMade={guessMade}
        lastGuessCorrect={lastGuessCorrect}
      />
      <div>
        {guessMade && (
          <div className="guesser-result score">
            {lastGuessCorrect ? (
              <h3>Correct! 🎉</h3>
            ) : (
              <h3>Ooof! 😔</h3>
            )}
          </div>
        )}


        {guessMade && (
          <div className="actions">
            <div className="next-btn" onClick={handleNext}>
              Next Question
            </div>

            <br />

            <Link  className="learn-more-btn" to={`/breeds/${currentBreed}`}>
              View More {currentBreed} Pictures!
            </Link>

          </div>
        )}

      </div>
    </div>
  );
}
