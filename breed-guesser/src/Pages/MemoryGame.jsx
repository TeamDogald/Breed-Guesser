// import style from "./style.module.css";
import Cards from "../Components/MemoryGame/Cards";

const Memory = ({ newData }) => {
  return (
    <>
      <h1 className={style.h1}>Match the Doggy Pair</h1>
      <div id='CardsContainer'>
        <div className={style.memoryContainer}>
          <div>
            <div className={style.container}>
              <Cards newData={newData} />
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default Memory;
