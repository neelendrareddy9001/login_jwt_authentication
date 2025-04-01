import { useContext } from "react";
import Navbar from "./Navbar";
import { ThemeContext } from "../context/themeContext";

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <div className="flex gap-[20%] bg-red-500 px-[4vw] p-24 h-full">
        <div className="w-1/2">
          <h1>Test your knowledge with us</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab ad
            rerum tempora suscipit inventore quae dolores, asperiores vitae et
            obcaecati.
          </p>
        </div>
        <div>
          <h4>good mornig</h4>
        </div>
      </div>
    </>
  );
};

export default Home;
