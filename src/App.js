import React, { useState } from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";
import "./swatch/bootstrap.css";
import mchammer from "./img/test/mchammer.gif";
import selfIcon from "./img/self_image.png";
import Navbar from "./components/UI/Navbar/Navbar";
import Main from "./components/Main/Main";

const Kentaro = () => {
  return <img src={selfIcon} alt="" className="icon"></img>;
};

const Mchmmer = () => {
  return <img src={mchammer} alt="counter"></img>;
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
