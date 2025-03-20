import { useContext } from "react";
import Navbar from "./Navbar";
import { ThemeContext } from "../context/themeContext";

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Home;
