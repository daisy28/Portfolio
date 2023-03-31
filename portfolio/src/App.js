import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Project from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className={``}>
      <Header />
      <About />
      <Project />
      {/* <Experience /> */}
      <Technologies />
      <Contact />
    </div>
  );
}

export default App;
