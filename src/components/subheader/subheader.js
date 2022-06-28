import "./subheader.css";

export const Subheader = () => {
  return (
    <div className="subheader">
      <div className="subheader__time">
        <span>
          <i class="fa-solid fa-clock"></i>
        </span>
        <span> Monday - Friday 8AM - 9AM</span>
      </div>
      <div className="subheader__social">
        <div className="subheader__social__visit">visit our social pages</div>
        <div className="subheader__social__icons">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};
