import "./header.css";
export const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          className="header__logo__img"
          src={require("../../assets/images/crown-logo.png")}
          alt=""
        />
      </div>
      <div className="header__options">
        <h6>Home</h6>
        <h6>About Us</h6>
        <h6>Our Services</h6>
        <h6>Publications</h6>
        <h6>Partners</h6>
        <h6>Contact Us</h6>
      </div>
      <div className="header__search">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};
