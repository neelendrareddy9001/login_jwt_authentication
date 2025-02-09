import { useContext } from "react";
import Navbar from "./Navbar";
import { ThemeContext } from "../context/themeContext";

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className=" h-[100vh] mt-2 px-2 sm:px-4 lg:px-8">
      <Navbar />
    </div>
  );
};

export default Home;
