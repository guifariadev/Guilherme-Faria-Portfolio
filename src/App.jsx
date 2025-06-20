import React from "react";
import Header from "./sections/Header";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>

  );
};

export default App;
