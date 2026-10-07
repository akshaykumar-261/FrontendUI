import React from "react";
import FotterImg from "../assets/FooterImg.png";
import AppStone from "../assets/AppStone.png"
import Play from "../assets/play.png"
function Footer() {
  return (
    <div className="h-[800px] w-full relative">
      <div
        className="relative h-[400px] bg-red-600 bg-cover bg-center"
        style={{
          backgroundImage: `url(${FotterImg})`,
        }}
      >
        {/* Gradient only on image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001014]/20 to-[#003F79]/80"></div>

        {/* Image content */}
        <div className="absolute inset-0  flex flex-col items-center justify-center gap-5">
          <p className="text-[35px] font-bold text-white">
            Available Now on AppStore & GooglePlay
          </p>
          <p className="font-semibold text-white text-[15px]">
            WebApp Package Coming Spring 2025!
          </p>
          <div className="flex gap-4">
            <img
              src={AppStone}
              alt="AppStone Icon"
              className=" object-cover rounded-[10px]"
            />
            <img
              src={Play}
              alt="Play Icon"
              className=" object-cover rounded-[10px]"
            />
          </div>
        </div>
      </div>
      <div className="bg-amber-400 h-[400px]">ggd</div>
    </div>
  );
}
export default Footer;
