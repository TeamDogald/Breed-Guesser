import { useState, useEffect } from "react";
import CardComponent from "./Card.jsx";
// import style from "./style.module.css";
import handleFetch from '../../Utils/handleFetch.js'
const RandomSixDogsUrl = `https://dog.ceo/api/breeds/image/random/6`;
const Cards = () => {
  const [dogPics, setDogPics] = useState([]);
  const [error, setError] = useState("");
  const [prevSelected, setPrevSelected] = useState(-1);
  // const [firstRender, setFirstRender] = useState(true);
  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await handleFetch(RandomSixDogsUrl);
      if (error) {
        setError(error.message);
      } else {
        setDogPics(data.message);
      }
    };
    doFetch();
  }, []);
  let doubledDogPics;
  //Prevent dublicating over and over by checking if we duplicated yet.
  //  Duplication was happening because everytime the dogPics array changed, the code to double
  // the dog pics was running again
  if (dogPics.length < 12) {
    const newData = [];
    for (let i = 0; i < dogPics.length; i++) {
      //Duplicating but still making sure the duplicates have different id's
      newData[i] = { id: i, src: dogPics[i], stat: "" };
      newData[i + 6] = { id: i + 6, src: dogPics[i], stat: "" };
    }
    doubledDogPics = newData;
  } else {
    doubledDogPics = dogPics;
  }
  console.log(doubledDogPics);
  function check(current) {
    console.log(current, prevSelected);
    //Checking if the picture is the same instead of if the id is the same
    if (doubledDogPics[current].src === doubledDogPics[prevSelected].src) {
      doubledDogPics[current].stat = "correct";
      doubledDogPics[prevSelected].stat = "correct";
      setDogPics([...doubledDogPics]);
      console.log(doubledDogPics[current].stat);
      setPrevSelected(-1);
    } else {
      doubledDogPics[current].stat = "wrong";
      console.log("checking stat if wrong", doubledDogPics[prevSelected].stat);
      doubledDogPics[prevSelected].stat = "wrong";
      setDogPics([...doubledDogPics]);
      setTimeout(() => {
        doubledDogPics[current].stat = "";
        doubledDogPics[prevSelected].stat = "";
        setDogPics([...doubledDogPics]);
        setPrevSelected(-1);
      }, 1000);
    }
  }
  function handleClick(e, id) {
    console.log("Clicked card id:", id);
    if (prevSelected === -1 && doubledDogPics[id].stat !== "active") {
      doubledDogPics[id].stat = "active";
      setDogPics([...doubledDogPics]);
      console.log("Clicked card stat:", doubledDogPics[id].stat);
      setPrevSelected(id);
    } else {
      check(id);
    }
  }
  return (
    <div className={style.container}>
      {doubledDogPics.map((item, index) => (
        <CardComponent
          key={index}
          doubledDogPics={item}
          id={index}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
export default Cards;
