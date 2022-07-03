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
          <input className="footer__input" placeholder="your email" />
          <button className="footer__btn">Submit</button>
        </div>
      </div>
      <div className="footer__mid">
        <div>ABOUT CROWN</div>
        <div>who we are</div>
        <div>What we do</div>
        <div>Our mission</div>
        <div>Our vision</div>
      </div>
      <div className="footer__aftermid">
        <div>QUICK LINKS</div>
        <div>Our Services</div>
        <div>All Projects</div>
        <div>Our Partners</div>
        <div>News</div>
      </div>
      <div className="footer__last">
        <div> CONTACT US</div>
        <div>
          <i class="fa fa-phone"></i>
          0123456789
        </div>
        <div>
          <i class="fa fa-envelope" aria-hidden="true"></i>info@crown.com
        </div>
        <div>
          <i class="fa fa-map-marker" aria-hidden="true"></i>123,Street Name -
          Cairo
        </div>
        <div className="footer__follow">FOLLOW US</div>
        <div className="footer__icons">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-google-plus-g"></i>
        </div>
      </div>
    </div>
  );
};
