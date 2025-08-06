const CardComponent = ({ id, src, stat, handleClick }) => {
  const clickHandler = () => {
    if (stat === "correct" || stat === "active") return;
    handleClick(id);
  };

  return (
    <div className={`memory-card ${stat}`} onClick={clickHandler}>
      <div className="memory-card-inner">
        <div className="memory-card-front" />
        <div className="memory-card-back">
          <img src={src} alt="Dog" className="memory-img" />
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
