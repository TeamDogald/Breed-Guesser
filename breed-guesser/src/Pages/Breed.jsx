import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import handleFetch from "../Utils/handleFetch.js";
import "./Breed.css";

const Breed = () => {
  const { breed } = useParams();

  const [pics, setPics] = useState([]);
  const [error, setError] = useState("");
  const [modalImage, setModalImage] = useState(null); 

  useEffect(() => {
    const getPics = async () => {
      const [data, error] = await handleFetch(`https://dog.ceo/api/breed/${breed}/images`);
      if (data) setPics(data.message);
      if (error) setError(error);
    };
    getPics();
  }, [breed]);

  return (
    <section className="breed-container">
      <h2>Look at these cool pictures of the great {breed}!</h2>
      {error && <p className="error">{error}</p>}

      <ul className="breed-gallery">
        {pics.map((pic, idx) => (
          <li key={idx} onClick={() => setModalImage(pic)}>
            <img src={pic} alt={`a ${breed}`} />
          </li>
        ))}
      </ul>

      {modalImage && (
        <div className="modal-backdrop" onClick={() => setModalImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalImage(null)}>×</button>
            <img src={modalImage} alt="dog fullscreen" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Breed;
