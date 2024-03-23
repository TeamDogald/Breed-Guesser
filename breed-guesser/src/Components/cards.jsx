import { useState, useEffect } from "react";
import CardComponent from "./card";
import style from "../Games/style.module.css";
import handleFetch from "../utils/handleFetch";

const RandomSixDogsUrl = `https://dog.ceo/api/breeds/image/random/6`;

const Cards = () => {
  const [dogPics, setDogPics] = useState([]);
  const [error, setError] = useState("");
  const [prevSelected, setPrevSelected] = useState(-1);

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

  const newData = [];
  for (let i = 0; i < dogPics.length; i++) {
    newData[i] = { id: i, src: dogPics[i], stat: "" };
  }

  const doubledDogPics = [...newData, ...newData];

  function check(current) {
    console.log(current, prevSelected);
    if (doubledDogPics[current].id === doubledDogPics[prevSelected].id) {
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

  function handleClick(id) {
    console.log("Clicked card id:", id);
    if (prevSelected === -1 && doubledDogPics[id].stat !== "active") {
      doubledDogPics[id].stat = "active";
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
