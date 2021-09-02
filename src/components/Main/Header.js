import React from "react";
import mchammer from "../../img/test/mchammer.gif";
import "./Header.css";
import spinningEarth from "../../img/test/spinningearth.gif";
import webTrips from "../../img/test/webtrips.gif";

const SpinningEarth = () => {
  return <img src={spinningEarth} className="earth"></img>;
};

const WebTrips = () => {
  return <img src={webTrips} className="webtrips"></img>;
};
const McHammer = () => {
  return <img src={mchammer} alt="gif of mchammer" className="hammer"></img>;
};

const Header = () => {
  return (
    <div className="welcome">
      <h3 className="welcome-moving-msg">
        君はファンキーモンキーベイビー！！イカれてるよ (Kentaro's homepage)
      </h3>
      <h1 className="welcome-msg">
        <font style={{ color: "#ff0000" }}>M</font>
        <font style={{ color: "#ff5a00" }}>a</font>
        <font style={{ color: "#ffb400" }}>k</font>
        <font style={{ color: "#FFff00" }}>e</font>
        <font style={{ color: "#a5ff00" }}> </font>
        <font style={{ color: "#4bff00" }}>M</font>
        <font style={{ color: "#00ff00" }}>e</font>
        <font style={{ color: "#00ff5a" }}> </font>
        <blink>
          <font style={{ color: "#00ff5a" }}>M</font>
          <font style={{ color: "#00ffb4" }}>a</font>
          <font style={{ color: "#00ffff" }}>g</font>
          <font style={{ color: "#00b4ff" }}>n</font>
          <font style={{ color: "#005aff" }}>i</font>
          <font style={{ color: "#0000ff" }}>f</font>
          <font style={{ color: "#4b00ff" }}>i</font>
          <font style={{ color: "#a500ff" }}>c</font>
          <font style={{ color: "#ff00ff" }}>e</font>
          <font style={{ color: "#ff00b4" }}>n</font>
          <font style={{ color: "#a5ff00" }}>t</font>
          <font style={{ color: "#00ff5a" }}> </font>
          <SpinningEarth />
        </blink>
        <br></br>
      </h1>
      <h3>
        Please do me make magnificent, tonight
        <WebTrips />
      </h3>
      <McHammer />
      <McHammer />
      <McHammer />
    </div>
  );
};

export default Header;
