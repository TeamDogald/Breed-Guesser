import { useMemo } from "react";
import "./GuessCard.css";

export default function GuessCard({
  breed,
  image,
  breeds,
  onGuess,
  loadingImages,
  guessMade,
  lastGuessCorrect,
}) {
  // Get 3 random wrong breed options (exclude current correct breed)
  const options = useMemo(() => {
    if (!breeds || breeds.length < 4) return [];

    const filtered = breeds.filter((b) => b !== breed);
    const shuffled = filtered.sort(() => Math.random() - 0.5);
    const wrongOptions = shuffled.slice(0, 3);

    return [...wrongOptions, breed].sort(() => Math.random() - 0.5);
  }, [breed, breeds]);

  return (
    <div className="guesscard-container">
      <img
        src={image}
        alt={`A ${breed} dog`}
        className="guesscard-img"
      />
      <div className="guesscard-options">
        {options.map((option) => {
          const isCorrect = option === breed;

          let classes = "guesscard-btn";
          if (guessMade) {
            classes += isCorrect
              ? " correct"
              : " incorrect";
          }

          const disabled = guessMade || loadingImages[option];

          return (
            <button
              key={option}
              onClick={() => onGuess(option)}
              className={classes}
              disabled={disabled}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
