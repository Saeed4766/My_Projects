import React from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <section className="px-20">
      <div className="flex gap-[3rem] w-[100%]">
        <HeroLeft />
        <HeroRight/>
      </div>
    </section>
  );
};

export default Hero;
