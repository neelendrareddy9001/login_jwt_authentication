import React, { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { NavigateContect } from "../context/NavContext";

//framer motion
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navlinks = [
  {
    id: 1,
    href: "/",
    title: "HOME",
  },
  {
    id: 2,
    href: "/about",
    title: "ABOUT",
  },
  {
    id: 3,
    href: "/cv",
    title: "CV",
  },
  {
    id: 4,
    href: "/projects",
    title: "PROJECTS",
  },
  {
    id: 5,
    href: "/contact",
    title: "CONTACT",
  },
];

const Navbar = () => {
  const { pages } = useContext(NavigateContect);
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(true);
  };
  const handleCloseMenu = () => {
    setIsOpen(!true);
  };
  return (
    <>
      <nav className=" bg-black lg:w-[55%] mx-auto py-4 px-8 rounded-full w-[90%] md:w-[75%] text-white z-[101] sm:w-[95%]">
        <div className="flex items-center justify-between">
          <NavLink to="/" href="" className="font-bold text-xl">
            Navbar
          </NavLink>
          <div className="hidden lg:space-x-5 lg:flex">
            {navlinks.map((item) => (
              <Link className="cursor-pointer" to={item.href} key={item.id}>
                {item.title}
              </Link>
            ))}
          </div>

          {!isOpen ? (
            <FiMenu
              className="block lg:hidden cursor-pointer"
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
      </nav>
      {isOpen && (
        <div className=" bg-black w-[90%] md:w-[75%] lg:w-[55%] mx-auto mt-3 rounded-xl lg:hidden shadow-xl duration-150">
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
