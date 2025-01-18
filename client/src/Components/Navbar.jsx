import React from "react";

const navlinks = [
  {
    id: 1,
    href: "/",
    title: "HOME",
  },
  {
    id: 2,
    href: "about",
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
  return (
    <div className=" bg-black lg:w-[55%] mx-auto py-4 px-10 border mt-4 rounded-full w-[90%] md:w-[75%] text-white z-[101]">
      <div className="flex items-center justify-between">
        <a href="#">Navbar</a>
        <ul className="items-center flex space-x-5">
          {navlinks.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
