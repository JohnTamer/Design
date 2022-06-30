import "./experience.css";
export const Experience = () => {
  return (
    <div className="experience">
      <div className="experience__left">
        <img
          className="experience__rec"
          src={require("../../assets/images/smallrec.png")}
          alt=""
        />
        <div className="experience__left__info">GROWING WITH OUR CLIENTS</div>
        <div className="experience__left__years">10 YEARS OF</div>
        <div className="experience__left__one">EXPERIENCE</div>
        <div className="experience__left__paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          Lorem Ipsum.
        </div>
        <div className="experience__container">
          <img
            className="experience__container__a1"
            src={require("../../assets/images/a1.png")}
            alt=""
          />
          <img
            className="experience__container__a2"
            src={require("../../assets/images/a2.png")}
            alt=""
          />
          <img
            className="experience__container__a3"
            src={require("../../assets/images/a3.png")}
            alt=""
          />
          <img
            className="experience__container__a4"
            src={require("../../assets/images/a4.png")}
            alt=""
          />
          <img
            className="experience__container__a5"
            src={require("../../assets/images/a5.png")}
            alt=""
          />
          <img
            className="experience__container__a6"
            src={require("../../assets/images/a4.png")}
            alt=""
          />
        </div>
      </div>
      <div className="experience__right"></div>
    </div>
  );
};
