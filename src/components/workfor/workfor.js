import "./workfor.css";
export const WorkFor = () => {
  return (
    <div className="workfor">
      <img
        className="workfor__bg"
        src={require("../../assets/images/background.png")}
        alt=""
      />
      <div className="workfor__container">
        <div className="workfor__container__one">WORK FOR US</div>
        <div className="workfor__container__two">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          Lorem Ipsum is simply dummy text of the printing and
        </div>
      </div>
      <button className="btnthree">KNOW MORE</button>
    </div>
  );
};
