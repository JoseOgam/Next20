import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <header>
        <div className="flex flex-col items-center justify-center">
          <h2 className=" text-6xl text-orange-500 font-bold">
            Project based Learning.
          </h2>
          <span className=" text-3xl text-sky-700 py-4">Nextjs 13</span>
          <p className=" text-white py-5">
            The best way to learning programming is through projects
          </p>
          <div>
            <Image
              src="/next.svg"
              alt="next logo image"
              width={118}
              height={118}
              className=" py-8"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
