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
      <div className="header__options"></div>
    </div>
  );
};
