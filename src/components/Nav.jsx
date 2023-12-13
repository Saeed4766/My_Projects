import React, { useState } from "react";
import tailwind from "../assets/image.png";
import Button from "./Button";
import { FaXmark } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <nav className="p-5 bg-white  md:flex py-4 px-7 md:px-10 justify-between items-center">
        <div className="flex text-2xl  items-center w-full flex-wrap gap-2 font-[poppins] text-gray-800 cursor-pointer ">
          <span className="">
            <img src={tailwind} alt="" className="h-6 inline" />
          </span>
          tailwind
          <span
            className="absolute right-8 cursor-pointer mx-2 text-3xl block"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FaXmark className="md:hidden" />
            ) : (
              <IoMdMenu className="md:hidden" />
            )}
          </span>
        </div>

        <div
          onClick={toggleMenu}
          className={`${
            isMenuOpen ? "hidden" : "block w-[100%]"
          } lg: flex items-center justfify-between opacity-100 md:opacity-100 gap-x-[5rem]`}
        >
          <ul className="md:flex md:items-center w-full md:w-auto absolute left-0 top-12 bg-white md:py-0 py-4 md:pl-0 pl-9  transition-all ease-in md:static ">
            <li className="mx-4 my-7 md:my-0 hover:text-cyan-500 duration-500">
              <a href="" className="text-xl">
                HOME
              </a>
            </li>
            <li className="mx-4 my-7 md:my-0 hover:text-cyan-500 duration-500">
              <a href="" className="text-xl">
                SERVICES
              </a>
            </li>
            <li className="mx-4 my-7 md:my-0 hover:text-cyan-500 duration-500">
              <a href="" className="text-xl">
                ABOUT
              </a>
            </li>
            <li className="mx-4 my-7 md:my-0 hover:text-cyan-500 duration-500">
              <a href="" className="text-xl">
                CONTACT
              </a>
            </li>
            <li className="mx-4 my-7 md:my-0 hover:text-cyan-500 duration-500">
              <a href="" className="text-xl">
                BLOG'S
              </a>
            </li>

            <Button>Get Started</Button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
