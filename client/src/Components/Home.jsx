import { useContext } from "react";
import Navbar from "./Navbar";
import { ThemeContext } from "../context/themeContext";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-3 bg-pink-100 px-[4vw] p-24 lgg:px-[8vw] h-[89vh] lgg:flex-row lgg:gap-[20%]">
        <div className="h-full">
          <h1 className="lgg:text-5xl mdd:text-4xl smm:text-3xl text-bold mb-[1.25rem] max-w-md">
            Test your knowledge with us
          </h1>
          <p className="max-w-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab ad
            rerum tempora suscipit inventore quae dolores, asperiores vitae et
            obcaecati.
          </p>
          <div className="btns mt-8 flex flex-col gap-4 mdd:flex-row">
            <button className=" py-3 px-4 bg-black text-white rounded-lg font-semibold mdd:w-[40%]">
              Downalod
            </button>
            <button className="px-4 py-3 bg-black text-white rounded-lg font-semibold mdd:w-[40%]">
              Know More
            </button>
          </div>

          <div className="icons my-[10%] flex items-center px-16 gap-8  m-auto justify-content-around space-x-4">
            <FaFacebook size={24} />
            <FaInstagram size={24} />
            <FaTwitter size={24} />
          </div>
        </div>

        <div>
          <h4>good mornig this is good to know about this</h4>
        </div>
      </div>
    </>
  );
};

export default Home;
