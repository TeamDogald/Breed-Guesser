import { useMemo } from "react";

export default function GuessCard({ breed, image, breeds, onGuess, loadingImages, guessMade, lastGuessCorrect }) {
  // Get 3 random wrong breed options (exclude current correct breed)
  const options = useMemo(() => {
    if (!breeds || breeds.length < 4) return [];

    const filtered = breeds.filter((b) => b !== breed);
    const shuffled = filtered.sort(() => Math.random() - 0.5);
    const wrongOptions = shuffled.slice(0, 3);

    return [...wrongOptions, breed].sort(() => Math.random() - 0.5);
  }, [breed, breeds]);

  return (
    <div>
      <img
        src={image}
        alt={`A ${breed} dog`}
        style={{ maxWidth: "100%", borderRadius: 12, marginBottom: 20 }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
        {options.map((option) => {
          const isCorrect = option === breed;
          let bgColor = "white";

          if (guessMade) {
            if (option === breed) {
              bgColor = "#4caf50"; // green correct
            } else{
              bgColor = "#f44336"; // red wrong
            }
          }

          return (
            <button
              key={option}
              onClick={() => onGuess(option)}
              disabled={guessMade || loadingImages[option]}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: 8,
                cursor: guessMade ? "default" : loadingImages[option] ? "not-allowed" : "pointer",
                opacity: loadingImages[option] ? 0.5 : 1,
                backgroundColor: bgColor,
                border: "1px solid #ccc",
                color: bgColor !== "white" ? "white" : "black",
                fontWeight: guessMade && isCorrect ? "bold" : "normal",
              }}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
