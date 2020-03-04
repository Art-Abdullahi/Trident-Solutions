import React from "react";

import "./App.css";
import Example from "./components/Header";

import Showcase from "./components/Showcase";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="nemu">
        <Example />
      </div>
      <div className="navigate">
        <Showcase />
      </div>
      <div className="about">
        <About />
      </div>
      <div>
        <Services />
      </div>
      <Footer />
    </div>
  );
}

export default App;
