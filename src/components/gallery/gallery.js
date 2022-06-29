import "./gallery.css";
export const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__one">SEE WHAT WE DO</div>
      <div className="gallery__two">
        OUR <span> GALLERY</span>
      </div>
      <div className="gallery__container">
        <div className="gallery__container__one">
          <div className="div__img">
            <img
              className="gallery__img"
              src={require("../../assets/images/1.png")}
              alt=""
            />
          </div>
          <div className="div__img">
            <img
              className="gallery__img"
              src={require("../../assets/images/2.png")}
              alt=""
            />
          </div>
          <div className="div__img">
            <img
              className="gallery__img"
              src={require("../../assets/images/3.png")}
              alt=""
            />
          </div>
        </div>
        <div className="gallery__container__two">
          {" "}
          <div className="div__img">
            <img
              className="gallery__img"
              src={require("../../assets/images/4.png")}
              alt=""
            />
          </div>
          <div className="div__img">
            <img
              className="gallery__img"
              src={require("../../assets/images/5.png")}
              alt=""
            />
          </div>
          <div className="div__img">
            <img
              className="gallery__img"
              src={require("../../assets/images/6.png")}
              alt=""
            />
          </div>
        </div>
      </div>
      <button className="btnfour">SEE ALL</button>
    </div>
  );
};
