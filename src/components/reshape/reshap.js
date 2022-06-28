import "./reshap.css";
export const Reshap = () => {
  return (
    <div className="reshape">
      <img
        className="reshape__background"
        src={require("../../assets/images/Mask.png")}
        alt=""
      />
      <div className="reshape__info">
        <div>RE-SHAPING</div>

        <div className="reshape__info__real">REALITIES</div>
      </div>
      <div className="reshape__text">
        Traditionally, a crown has been a continuous and everlasting symbol of
        greatness.
      </div>
      <div className="reshape__subtext">
        Greatness of power, of authority and leadership, and glory.
      </div>
      <div className="reshape__button">
        <button className="mybutton">KNOW MORE</button>
      </div>
    </div>
  );
};
