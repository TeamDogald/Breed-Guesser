import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import handleFetch from "../Utils/handleFetch";
import "./Home.css";

const randDogs = "https://dog.ceo/api/breeds/image/random";

const Home = () => {
  const [img, setImg] = useState(
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdowney.co.nz%2Fwp-content%2Fuploads%2F2015%2F09%2Fawards-grey-box-large.jpg&f=1&nofb=1&ipt=4333a941335fef3af0d1b775130fb12772b3701f71fa86ecebb52cd0289fd21a&ipo=images"
  );
  const [err, setErr] = useState("");
  useEffect(() => {
    const getImg = async () => {
      const [data, err] = await handleFetch(randDogs);
      if (data) setImg(data.message);
      if (err) setErr(err);
    };
    getImg();
  }, []);

  const stuff = img.split("/");
  let breedName = stuff[4] || "";
  breedName = breedName
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div id="home">
      <div id="header">
        <div id="random-dog-section">
          <h2>Welcome!</h2>
          <div id="img-div">
            <img src={img} alt="Random dog" id="home-img" />
            <p id="breed-name">{breedName}</p>
            <Link
              to={`/breed/${breedName.toLowerCase()}`}
              className="btn more-btn"
            >
              More of this breed
            </Link>
          </div>
        </div>
        <section>
          <div id="browse-btn">
            <Link to="breeds">
              Look at our gallery of different dog breeds!
            </Link>
          </div>
        </section>
        <section>
         <h2>Games</h2>
         <div className="games-grid">
            <div>
               <Link to="games/guesser">Breed Guesser</Link>
               <p>Guess the correct breed from a set of options.</p>
            </div>
            <div>
               <Link to="games/memory">Match Doggy Pair</Link>
               <p>Flip cards to find matching pairs of dogs.</p>
            </div>
            <div>
               <Link to="games/puzzle">Sliding Puzzle</Link>
               <p>Rearrange tiles to complete the dog picture.</p>
            </div>
         </div>
      </section>

      </div>
      {err && <p className="error">{err}</p>}
    </div>
  );
};

export default Home;
