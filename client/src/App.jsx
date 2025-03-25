import React, { useState } from "react";

// import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Route, Router, Routes } from "react-router-dom";
import About from "./pages/About";
import { ThemeContext, themes } from "./context/themeContext";
import Navbar from "./Components/Navbar";
import Testimonials from "./pages/Testimonial";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const App = () => {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    setTheme((state) => (state === themes.light ? themes.dark : themes.light));
  };
  return (
    <>
      <ThemeContext.Provider value={(theme, setTheme)}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tesimonials" element={<Testimonials />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
