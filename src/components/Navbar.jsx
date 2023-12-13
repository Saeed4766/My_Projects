import React, { useState } from "react";
import tailwind from "../assets/image.png";
import { IoMdMenu } from "react-icons/io";
import { FaHandMiddleFinger, FaXmark } from "react-icons/fa6";
import Button from "./Button";

const Navbar = () => {
  // let Links = [
  //   {name: "HOME", link: "/"},
  //   {name: "SERVICES", link: "/"},
  //   {name: "ABOUT", link: "/"},
  //   {name: "CONTACT", link: "/"},
  //   {name: "BLOG'S", link: "/"},
  // ]
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <nav className="p-5 bg-white items-center justify-between  md:flex py-4 px-7 md:px-10 ">
        <div className="flex items-center text-2xl text-gray-800 font-[poppins] cursor-pointer gap-2 w-full flex-wrap">
          <span className=" ">
            <img src={tailwind} alt="" className="h-5 inline" />
          </span>
          tailwind

          <span
            className="text-3xl block cursor-pointer mx-2 absolute right-8 "
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FaXmark className=" md:hidden" />
            ) : (
              <IoMdMenu className=" md:hidden" />
            )}
          </span>
        </div>

        <div
          onClick={toggleMenu}
          className={`${
            isMenuOpen ? "hidden" : "block w-[100%] "
          } lg:flex justify-between items-center gap-x-[5rem] opacity-100 md:opacity-100`}
        >
          <ul className="md:flex md:items-center w-full md:w-auto md:static absolute bg-white left-0 md:py-0 py-4 md:pl-0 pl-9 transition-all duration-500 ease-in">
            {/* {
              Links.map((link)=>{
                <li key={link.name} className="md:ml-8  text-xl">
                  <a href={link.link}>{link.name}</a>
                </li>
              })
            } */}
            <li className="mx-4 my-7 md:my-0 hover:text-cyan-500 duration-500 ">
              <a href="" className="text-xl ">
                HOME
              </a>
            </li>
            <li className="mx-4 my-7 md:my-0 hover:text-cyan-500 duration-500">
              <a href="" className="text-xl ">
                SERVICES
              </a>
            </li>
            <li className="mx-4 my-7 md:my-0 hover:text-cyan-500 duration-500">
              <a href="" className="text-xl ">
                ABOUT
              </a>
            </li>
            <li className="mx-4 my-7 md:my-0 hover:text-cyan-500 duration-500">
              <a href="" className="text-xl ">
                CONTACT
              </a>
            </li>
            <li className="mx-4 my-7 md:my-0 hover:text-cyan-500 duration-500">
              <a href="" className="text-xl ">
                BLOG'S
              </a>
            </li>

          <Button>
            Get Started
          </Button>
          
          </ul>
        </div>
      </nav>
    </div>

    //     <div className="flex justify-between items-center px-[5rem] flex-wrap w-[100%] " >
    //       <h1>LOGO</h1>

    // <button type="button" onClick={toggleMenu} >
    //   { isMenuOpen? <FaXmark className="lg:hidden "/> : <IoMdMenu className="lg:hidden "/>   }
    // </button>

    //       <div onClick={toggleMenu} className={`${isMenuOpen? "hidden":"block w-[100%] "} lg:flex   justify-between items-center gap-x-[5rem] `} >
    //         <p>one</p>
    //         <p>two</p>
    //         <p>three</p>
    //       </div>

    //     </div>
  );
};

export default Navbar;
