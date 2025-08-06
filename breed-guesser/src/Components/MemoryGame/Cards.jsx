import { useEffect, useState } from "react";
import CardComponent from "./Card";
import handleFetch from "../../Utils/handleFetch";

const RandomSixDogsUrl = `https://dog.ceo/api/breeds/image/random/6`;

const Cards = ({ onScore, onMove, onWin, resetTrigger }) => {
  const [dogPics, setDogPics] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [animating, setAnimating] = useState(false); // cooldown lock

  const initializeCards = async () => {
    const [data, error] = await handleFetch(RandomSixDogsUrl);
    if (error) return;
    const pics = data.message;
    const cards = pics.concat(pics) // duplicate for matching
      .map((src, index) => ({ id: index, src, stat: "" }))
      .sort(() => Math.random() - 0.5);
    setDogPics(cards);
    setFlipped([]);
    setMatched([]);
    setAnimating(false);
  };

  useEffect(() => {
    initializeCards();
  }, [resetTrigger]);

  const handleClick = (index) => {
    if (animating || flipped.includes(index) || matched.includes(index)) return;
  
    const newFlipped = [...flipped, index];
    const updatedPics = [...dogPics];
    updatedPics[index].stat = "active";
    setDogPics(updatedPics);
    setFlipped(newFlipped);
  
    if (newFlipped.length === 2) {
      setAnimating(true); // block clicks temporarily
  
      // Delay so the second card is visible before comparison
      setTimeout(() => {
        onMove();
  
        const [first, second] = newFlipped;
  
        if (dogPics[first].src === dogPics[second].src) {
          // Match found
          updatedPics[first].stat = "correct";
          updatedPics[second].stat = "correct";
          setMatched([...matched, first, second]);
          onScore();
          setDogPics(updatedPics);
          setFlipped([]);
          setAnimating(false);
  
          if (matched.length + 2 === dogPics.length) {
            onWin();
          }
        } else {
          // No match
          updatedPics[first].stat = "wrong";
          updatedPics[second].stat = "wrong";
          setDogPics(updatedPics);
  
          // Wait briefly before flipping back
          setTimeout(() => {
            updatedPics[first].stat = "";
            updatedPics[second].stat = "";
            setDogPics([...updatedPics]);
            setFlipped([]);
            setAnimating(false);
          }, 500); // keep cards flipped wrong for a moment
        }
      }, 700); // small delay to let second card flip
    }
  };
  
  

  return (
    <div className="memory-grid">
      {dogPics.map((item, index) => (
        <CardComponent
          key={item.id}
          id={index}
          src={item.src}
          stat={item.stat}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Cards;
