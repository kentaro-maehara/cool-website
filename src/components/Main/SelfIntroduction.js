import React from "react";
import icon from "../../img/self_image.png";
import "./SelfIntroduction.css";

const Icon = () => {
  return <img src={icon} className="icon"></img>;
};

const SelfIntroduction = () => {
  return (
    <div>
      <div className="page-header"></div>
      <h2>Who is Kentaro Maehara anyway?</h2>
      <Icon />
    </div>
  );
};

export default SelfIntroduction;
