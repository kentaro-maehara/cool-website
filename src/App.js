import React from "react";

import "./App.css";
import "./swatch/bootstrap.css";
import Navbar from "./components/UI/Navbar/Navbar";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
