import React, { useContext, useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { NavigateContect } from "../context/NavContext";

//framer motion
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Modlbutton from "../utils/Modlbutton";

const navlinks = [
  {
    id: 1,
    href: "/",
    title: "Home",
  },
  {
    id: 2,
    href: "/about",
    title: "About",
  },
  {
    id: 3,
    href: "/tesimonials",
    title: "Testimonials",
  },
  {
    id: 4,
    href: "/services",
    title: "Our Services",
  },
  {
    id: 5,
    href: "/contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const { pages } = useContext(NavigateContect);
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setIsHidden] = useState(false);

  const { scrollY } = useScroll();

  const handleMenu = () => {
    setIsOpen(true);
  };
  const handleCloseMenu = () => {
    setIsOpen(!true);
  };

  const modalOpen = () => {
    setModal(!modal);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });
  return (
    <>
      <motion.nav
        variants={{
          hidden: { y: "-100%" },
          visible: { y: "0" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className=" bg-black lg:w-[55%] mx-auto py-4 px-[4vw] w-[100%] md:w-[75%] text-white z-[101] sm:w-[95%] relative"
      >
        <div className="flex items-center justify-between relative">
          <NavLink to="/" href="" className="font-bold text-xl">
            Navbar
          </NavLink>
          <div className="hidden lgg:flex gap-8 items-center">
            {navlinks.map((item) => (
              <Link
                className="cursor-pointer navlink"
                to={item.href}
                key={item.id}
              >
                <a> {item.title}</a>
              </Link>
            ))}
            <button
              className="px-8 py-3 bg-white rounded-full text-black font-semibold"
              onClick={modalOpen}
            >
              Register
            </button>
          </div>

          {!isOpen ? (
            <FiMenu
              className="block mdd:hidden cursor-pointer"
              size={28}
              onClick={handleMenu}
            />
          ) : (
            <IoClose
              className="block lg:hidden cursor-pointer"
              size={28}
              onClick={handleCloseMenu}
            />
          )}
        </div>
      </motion.nav>
      {isOpen && (
        <div className=" bg-black  w-[60%] md:w-[50%] fixed top-[48px] left-[22%] lg:w-[55%] mx-auto rounded-xl mt-20 lg:hidden shadow-xl duration-150">
          <div className="flex text-white flex-col gap-8 text-center p-[2rem]">
            {navlinks.map((item) => (
              <Link
                className="cursor-pointer links"
                to={item.href}
                key={item.id}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
