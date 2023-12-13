import React from "react";
import logo from "../../../assets/Zulfah-logo.png";
import Btn from "../../Btn";

const Nav = () => {
  return (
    <div className="font-[poppins] w-full px-20">
      <nav className="bg-white  pt-4 flex items-center justify-between ">
        <span className="">
          <img src={logo} alt="" className="w-20" />
        </span>

        <ul className=" flex items-center gap-x-16">
          <li className="text-[#2f5479] text-xl hover:text-[#ff8cb5]">
            <a href="">Home</a>
          </li>
          <li className="text-[#2f5479] text-xl hover:text-[#ff8cb5]">
            <a href="">About</a>
          </li>
          <li className="text-[#2f5479] text-xl hover:text-[#ff8cb5]">
            <a href="">Team</a>
          </li>
          <li className="text-[#2f5479] text-xl hover:text-[#ff8cb5]">
            <a href="">Proudly Us</a>
          </li>
          <li className="text-[#2f5479] text-xl hover:text-[#ff8cb5]">
            <a href="">Contact Us</a>
          </li>
          <Btn backg="text-white bg-[#2b4b80]" >SOFTWARE ACADEMY</Btn>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
