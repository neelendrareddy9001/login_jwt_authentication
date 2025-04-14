import { useContext } from "react";
import Navbar from "./Navbar";
import { ThemeContext } from "../context/themeContext";

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <div className="flex gap-[20%] bg-red-500 px-[4vw] p-24">
        <div>
          <h1 className="lgg:text-5xl mdd:text-4xl smm:text-3xl text-xl-semibold mb-[1.25rem]">
            Test your knowledge with us
          </h1>
          <p className="max-w-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab ad
            rerum tempora suscipit inventore quae dolores, asperiores vitae et
            obcaecati.
          </p>
          <div className="bns"></div>
        </div>

        <div>
          <h4>good mornig</h4>
        </div>
      </div>
    </>
  );
};

export default Home;
