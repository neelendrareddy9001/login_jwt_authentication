import { useContext } from "react";
import Navbar from "./Navbar";
import { ThemeContext } from "../context/themeContext";

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <div className="w-full px-8">
        <h1>Hello</h1>
      </div>
    </>
  );
};

export default Home;
