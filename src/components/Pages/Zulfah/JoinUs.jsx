import React from "react";
import Card from "../../Card";
import { TiUploadOutline } from "react-icons/ti";
import { GiGrowth } from "react-icons/gi";
import { FaCodeBranch } from "react-icons/fa";



const JoinUs = () => {
  return (
    <section className="px-20 py-12 bg-white">
      <div className="">
        <div className="bg-[#2b4b80] rounded-md py-6">
          <p className="text-white text-center text-3xl font-semibold">
            Join our 6-months Software Engineering Bootcamp. Click{" "}
            <span className="text-[#ff8cb5]">here</span> to know more.
          </p>
        </div>
        <div className="py-28 mb-8">
          <h1 className="text-center text-[#2b4b80] text-6xl font-bold">
            We're experts in:
          </h1>
        </div>
        <div className="flex items-center justify-center gap-7">
          <Card
            icon={<TiUploadOutline />}
            title="Bespoke Software Development"
            desc="Application Design and Development"
            start="GET STARTED"
          />

          <Card
            icon={<FaCodeBranch />}
            title="Artificial Intelligence and Machine Learning"
            desc="Artificial Intelligence and Machine Learning and App integration."
            start="GET STARTED"
          />

          <Card
            icon={<GiGrowth />}
            title="Product Design and Project Mangement"
            desc="Product Design, Development and Lifecycle Mangement."
            start="GET STARTED"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
