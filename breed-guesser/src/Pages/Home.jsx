import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import handleFetch from "../Utils/handleFetch";
import "./Home.css";

const BREEDS_LIST_URL = "https://dog.ceo/api/breeds/list/all";

const Home = () => {
  const [breeds, setBreeds] = useState([]);
  const [images, setImages] = useState({});
  const [loadingImages, setLoadingImages] = useState({});
  const [error, setError] = useState("");
  const [featuredBreed, setFeaturedBreed] = useState(null);

  useEffect(() => {
    const getBreeds = async () => {
      const [data, err] = await handleFetch(BREEDS_LIST_URL);
      if (err) {
        setError("Failed to load breeds");
        return;
      }

      const breedList = Object.keys(data.message);
      setBreeds(breedList);

      const imagePromises = breedList.map(async (breed) => {
        setLoadingImages((prev) => ({ ...prev, [breed]: true }));
        const [imgData] = await handleFetch(
          `https://dog.ceo/api/breed/${breed}/images/random`
        );
        setLoadingImages((prev) => ({ ...prev, [breed]: false }));
        return [breed, imgData?.message || null];
      });

      const breedImages = await Promise.all(imagePromises);
      const imagesObj = Object.fromEntries(breedImages);
      setImages(imagesObj);

      const random = breedList[Math.floor(Math.random() * breedList.length)];
      setFeaturedBreed(random);
    };

    getBreeds();
  }, []);

  const refreshFeatured = useCallback(() => {
    if (breeds.length === 0) return;
    let next;
    do {
      next = breeds[Math.floor(Math.random() * breeds.length)];
    } while (next === featuredBreed && breeds.length > 1);
    setFeaturedBreed(next);
  }, [breeds, featuredBreed]);

  const formatBreedName = (raw) =>
    raw
      .split("-")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" ");

  const featuredImage =
    featuredBreed && images[featuredBreed] ? images[featuredBreed] : null;
  const displayName = featuredBreed ? formatBreedName(featuredBreed) : "";

  return (
    <main className="home">
      <section className="home-feature">
        <h2 className="home-title">Welcome!</h2>

        {featuredImage ? (
          <div className="home-card">
            <img src={featuredImage} alt={featuredBreed} className="home-image" />
            <p className="home-breed">{displayName}</p>
            <div className="home-actions">
              <Link to={`breeds/${featuredBreed}`} className="home-btn">
                More of this breed
              </Link>
              <div className="home-btn" onClick={refreshFeatured}>
                Refresh
              </div>
            </div>
          </div>
        ) : (
          <p>Loading featured breed...</p>
        )}
      </section>

      <section className="home-browse">
        <Link to="/breeds" className="home-btn browse">
          Look at our gallery of different dog breeds!
        </Link>
      </section>

      <section className="home-games">
        <h2>Games</h2>
        <div className="games-grid">
          <div>
            <h3>Breed Guesser</h3>
            <div className="game-icon">🐶</div>
            <p>Guess the correct breed from a set of options.</p>
            <Link className="home-btn" to="games/guesser">Play</Link>

          </div>
          <div>
            <h3>Match Doggy Pair</h3>
            <div className="game-icon">🃏</div>
            <p>Flip cards to find matching pairs of dogs.</p>
            <Link className="home-btn" to="games/memory">Play</Link>

          </div>
          <div>
            <h3>Sliding Puzzle</h3>
            <div className="game-icon">🧩</div>
            <p>Rearrange tiles to complete the dog picture.</p>
            <Link className="home-btn" to="games/puzzle">Play</Link>
          </div>
        </div>
      </section>

      {error && <p className="error">{error}</p>}
    </main>
  );
};

export default Home;
