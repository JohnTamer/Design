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
          <div className="publication__paragraph">
            <div className="publication__paragraph__one">
              Consulting Project
            </div>
            <div className="publication__paragraph__two">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </div>
            <button className="publication__btn">DOWNLOAD</button>
          </div>
        </div>

        <div className="publication__div">
          <img
            className="publication__img"
            src={require("../../assets/images/pub.png")}
            alt=""
          />
          <div className="publication__paragraph">
            <div className="publication__paragraph__one">
              Consulting Project
            </div>
            <div className="publication__paragraph__two">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </div>
            <button className="publication__btn">DOWNLOAD</button>
          </div>
        </div>
        <div className="publication__div">
          <img
            className="publication__img"
            src={require("../../assets/images/pub.png")}
            alt=""
          />
          <div className="publication__paragraph">
            <div className="publication__paragraph__one">
              Consulting Project
            </div>
            <div className="publication__paragraph__two">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </div>
            <button className="publication__btn">DOWNLOAD</button>
          </div>
        </div>
      </div>
    </div>
  );
};
