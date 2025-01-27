import React, { useState } from "react";
import "./App.css";
// import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Cv from "./pages/Cv";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import { ThemeContext, themes } from "./context/themeContext";

const App = () => {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    setTheme((state) => (state === themes.light ? themes.dark : themes.light));
  };
  return (
    <>
      <ThemeContext.Provider value={(theme, setTheme)}>
        <Home />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
