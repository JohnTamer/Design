import "./footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <div className="footer__div">
          <img
            className="footer__img"
            src={require("../../assets/images/crown-logo.png")}
            alt=""
          />
        </div>
        <div className="footer__left__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          Lorem Ipsum.
        </div>
        <div className="footer__left__word">
          <b>Newsletter</b>
        </div>
        <div className="footer__left__para">
          Signup for industry alerts, News & Insights
        </div>
        <div>
          {/* <img
            className="footer__round"
            src={require("../../assets/images/footerround.png")}
            alt=""
          />
          <img
            className="footer__rec"
            src={require("../../assets/images/footerrec.png")}
            alt=""
          /> */}
          <input className="footer__input" placeholder="your email" />
          <button className="footer__btn">Submit</button>
        </div>
      </div>
    </div>
  );
};
