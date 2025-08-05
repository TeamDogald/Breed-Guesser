// import Cards from "./cards";
// import style from "./style.module.css";
function CardComponent({ doubledDogPics, id, handleClick }) {
  // const itemClass = doubledDogPics.stat ? style.active + ' ' + style[`${doubledDogPics.stat}`] : "";
  // console.log(itemClass);
  return (
    // Use string interpolation for condition styling
    <div
      className={`${style.card} ${
        doubledDogPics.stat
          ? `${style.active} ${style[`${doubledDogPics.stat}`]}`
          : ""
      }`}
      onClick={(e) => handleClick(e, id)}
    >
      <img src={doubledDogPics.src} alt="" />
    </div>
  );
}
export default CardComponent;
