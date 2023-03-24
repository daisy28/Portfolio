import React from "react";
import Project from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";


function App() {
  return (
    <div className="text-3xl font-bold underline bg-header-background">
      <About />
      <Project />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
