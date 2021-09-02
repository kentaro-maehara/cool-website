import React, { useState } from "react";
import icon from "../../img/self_icon.jpg";
import selfIcon from "../../img/selfIcon.png";
import "./SelfIntroduction.css";

const Icon = () => {
  return <img src={icon} className="icon"></img>;
};

const SelfIcon = () => {
  return <img src={selfIcon} className="icon"></img>;
};

const SelfIntroduction = () => {
  const [trueIcon, setTrueIcon] = useState(false);

  const iconFalse = () => {
    setTrueIcon(false);
  };
  const changeIcon = () => {
    setTrueIcon(true);
    setTimeout(iconFalse, 2000);
  };
  return (
    <div>
      <div className="page-header"></div>
      <h2>Who is Kentaro Maehara anyway?</h2>
      <button className="btn btn-info" onClick={changeIcon}>
        true figure...
      </button>
      {trueIcon ? <SelfIcon /> : <Icon />}
    </div>
  );
};

export default SelfIntroduction;
