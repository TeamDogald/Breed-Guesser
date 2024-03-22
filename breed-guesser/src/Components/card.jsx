// import Cards from "./cards";
import style from '../Games/style.module.css'


function CardComponent({ newData, id, handleClick }) {
    const itemClass = newData.stat ? "active" + newData.stat: ""
    return (
        <div className={style.card + itemClass} onClick={() => handleClick(id)}>
            <img src={newData.src} alt="" />
        </div>
    );
}

export default CardComponent