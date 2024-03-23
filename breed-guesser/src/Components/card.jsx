// import Cards from "./cards";
import style from "../Games/style.module.css";

function CardComponent({ doubledDogPics, id, handleClick }) {
  const itemClass = doubledDogPics.stat ? "active" + doubledDogPics.stat : "";
  console.log(itemClass);
  return (
    <div className={style.card + itemClass} onClick={() => handleClick(id)}>
      <img src={doubledDogPics.src} alt="" />
    </div>
  );
}

export default CardComponent;
