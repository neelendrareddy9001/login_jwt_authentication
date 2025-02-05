import { useContext } from "react";
import Navbar from "./Navbar";
import { ThemeContext } from "../context/themeContext";

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className=" h-[100vh] p-2 sm:p-4 lg:p-8">
      <Navbar />
    </div>
  );
};

export default Home;
