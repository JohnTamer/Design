import "./workwithus.css";
export const WorkWithUs = () => {
  return (
    <div className="work">
      <div className="work__left">
        <img
          className="rectangle"
          src={require("../../assets/images/smallrec.png")}
          alt=""
        />
        <span className="work__left__text">
          WHAT'S MISSING IN YOUR BUSSINESS ?
        </span>
        <div className="work__left__container">
          <div className="work__left__container__one">WORK</div>
          <div className="work__left__container__two"> WITH US</div>
          <div className="work__left__container__three">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            Lorem Ipsum.
          </div>
        </div>
        <button className="btntwo">KNOW MORE</button>
      </div>
      <div className="work__right">
        <img
          className="hands"
          src={require("../../assets/images/hands.png")}
          alt=""
        />
      </div>
    </div>
  );
};
