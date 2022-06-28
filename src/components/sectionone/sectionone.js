import "./sectionone.css";
export const SectionOne = () => {
  return (
    <div className="sectionone">
      <div className="sectionone__first">
        <div className="sectionone__first__top">STORY BEHIND OUR LOGO</div>
        <div className="sectionone__first__bottom">
          CROWN'S <span>THREE PILLARS</span>
        </div>
      </div>
      <div className="sectionone__second">
        <img
          className="sectionone__background"
          src={require("../../assets/images/triangles.png")}
          alt=""
        />
        <div className="sectionone__container">
          <div class="container">
            <span className="text">GREEN REPRESENTS</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <button className="otherbutton">KNOW MORE</button>
          </div>
          <div class="container">
            <span className="texttwo">CHARCOAL IS ASSOCIATED</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <button className="otherbutton">KNOW MORE</button>
          </div>
          <div class="container">
            <span className="textthree">PURPLE IS THE COLOR OF</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <button className="otherbutton">KNOW MORE</button>
          </div>
        </div>
      </div>
      <div className="sectionone__third">
        <img
          className="sectionone__third__background"
          src={require("../../assets/images/shadowed.png")}
          alt=""
        />
        <div className="sectionone__third__left">
          <img
            className="sectionone__left__background"
            src={require("../../assets/images/man.png")}
            alt=""
          />
        </div>
        <div className="sectionone__third__right">
          <img
            className="rec"
            src={require("../../assets/images/smallrec.png")}
            alt=""
          />
          <span className="sectionone__third__small">
            WHAT'S MISSING IN YOUR BUSSINESS ?
          </span>
          <div className="one">GET YOUR BUSSINESS</div>
          <div className="two">RIGHT UP THERE</div>
          <div className="three">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </div>
          <button className="btn">KNOW MORE</button>
          <hr className="hr" />
          <div className="stats">
            <div>
              <div className="numbers">500+</div>
              <div className="infos">Bussiness advice given over 10 years</div>
            </div>
            <div>
              <div className="numbers">150+</div>
              <div className="infos">Bussiness advice given over 10 years</div>
            </div>
            <div>
              <div className="numbers__three">20+</div>
              <div className="infos">
                Bussiness excellence <br /> awards achieved
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
