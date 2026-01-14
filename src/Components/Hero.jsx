import React from "react";
import { MapPinCheckInside, Dot, Figma } from "lucide-react";
import { FaGithub, FaFigma, FaTwitter } from "react-icons/fa";
function Hero() {
  const ahover = "hover:text-white";
  return (
    <div className="h-138 bg-primary w-full text-white flex items-center gap-50 pl-[8rem] pr-[8rem]">
      <div className="w-4/6 flex flex-col gap-8">
        <div>
          <h1 className="font-bold text-[60px]">Hi, I'm Abdullah</h1>
        </div>
        <div className="-mt-8">
          <p className="text-[16px] leading-[24px] text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            porttitor dui ac lorem feugiat pharetra. Nullam purus urna, luctus
            fringilla sem vel, ornare porta sem. Praesent sed est eleifend,
            blandit sem eu, pulvinar ligula.
          </p>
        </div>
        <div>
          <div className="flex gap-2 text-gray-500">
            <MapPinCheckInside /> <p>Lahore, Pakistan</p>
          </div>
          <div className="flex gap-2 text-gray-500">
            <Dot color="green" /> <p>Available</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500">
          <a href="#" className={ahover}>
            <FaGithub />
          </a>
          <a href="#" className={ahover}>
            <FaFigma />
          </a>
          <a href="#" className={ahover}>
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="w-1/3 relative bg-amber-300 h-full w-full">
        <img
          src="/Media.jpeg"
          alt=""
          srcset=""
          className="h-[280px] absolute z-10 "
        />
        <img
          src="/Media.jpeg"
          alt=""
          srcset=""
          className="h-[280px] translate-1/8 absolute z-0 bg-gray-600 opacity-100"
        />
      </div>
    </div>
  );
}

export default Hero;
