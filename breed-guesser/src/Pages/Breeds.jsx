import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import handleFetch from '../Utils/handleFetch.js';
import './Breeds.css';

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [images, setImages] = useState({});
  const [loadingImages, setLoadingImages] = useState({});
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getBreeds = async () => {
      const [data, error] = await handleFetch('https://dog.ceo/api/breeds/list/all');
      if (data) {
        const breedList = Object.keys(data.message);
        setBreeds(breedList);

        // For each breed, fetch a random image and set loading flag
        const imagePromises = breedList.map(async (breed) => {
          setLoadingImages((prev) => ({ ...prev, [breed]: true }));
          const [imgData] = await handleFetch(`https://dog.ceo/api/breed/${breed}/images/random`);
          setLoadingImages((prev) => ({ ...prev, [breed]: false }));
          return [breed, imgData?.message || null];
        });

        const breedImages = await Promise.all(imagePromises);
        const imagesObj = Object.fromEntries(breedImages);
        setImages(imagesObj);
      }
      if (error) setError(error);
    };

    getBreeds();
  }, []);

  const filteredBreeds = breeds.filter(breed =>
    breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="breeds-container">
      <h2>Breeds</h2>

      <input
        type="search"
        placeholder="Search breeds..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="breeds-search"
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="breeds-grid">
        {filteredBreeds.map(breed => (
          <div key={breed} className="breed-card">
            <div className="breed-name">{breed}</div>

            {loadingImages[breed] ? (
              <div className="image-placeholder">Arch Arch...</div>
            ) : (
              <img
                src={images[breed] || 'https://via.placeholder.com/220x180?text=No+Image'}
                alt={breed}
                loading="lazy"
              />
            )}

            <Link to={`/breeds/${breed}`} className="see-more" tabIndex={-1}>
              See more
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Breeds;
