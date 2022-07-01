import "./publication.css";
export const Publication = () => {
  return (
    <div className="publication">
      <div className="publication__one">
        OUR <span className="publication__text">PUBLICATIONS</span>
      </div>
      <div className="publication__container">
        <div className="publication__div">
          <img
            className="publication__img"
            src={require("../../assets/images/pub.png")}
            alt=""
          />
        </div>
        <div className="publication__div">
          <img
            className="publication__img"
            src={require("../../assets/images/pub.png")}
            alt=""
          />
        </div>
        <div className="publication__div">
          <img
            className="publication__img"
            src={require("../../assets/images/pub.png")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
