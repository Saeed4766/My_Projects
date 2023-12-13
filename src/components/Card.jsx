import React from "react";
import { IoArrowForwardCircle } from "react-icons/io5";

const Card = ({ icon, title, desc, start }) => {
  return (
    <div className="w-[25rem] py-5 px-6 bg-white shadow-lg rounded-2xl ">
      <div className="text-center">
        <p className="text-[#ff8cb5] text-[4rem] mb-8 pl-32">{icon}</p>
        <p className="text-[1.8rem] text-[#2b4b80] leading-9 font-medium mb-8">
          {title}
        </p>
        <p className="text-[#808a9b] text-[1.35rem]">{desc}</p>
      </div>
      <a className="decoration-none flex items-center justify-center gap-2 text-[#7b63cf] mt-10">
        <IoArrowForwardCircle className="text-[1.8rem]" />
        <span>{start}</span>
      </a>
    </div>
  );
};

export default Card;
