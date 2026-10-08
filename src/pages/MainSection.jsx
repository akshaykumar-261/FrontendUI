import React from "react";
import backgroundImage from "../assets/backImage.png";
import Zoom from "../assets/zoom.png";
import Bull from "../assets/Freddie Bullworth 3 1.png";
import Button from "../Component/Button";
import Search from "../assets/search-2-line.png";
import Vector from "../assets/Vector.png";
import Group from "../assets/Group 568.png";
function MainSection() {
  return (
    <>
      <section
        className="relative h-[calc(100vh-90px)] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute top-[4%] right-[2%] w-[108px] h-[103px]  bg-gradient-to-tl  from-[#1C1A1B] to-[#5B5555] rounded-[12px]  flex flex-col items-center justify-center">
          <img src={Zoom} alt="Zoom" className="h-[38px] w-[38px]" />
          <p className="text-white font-semibold">Join Demo</p>
        </div>
        <img
          src={Bull}
          alt="Bull"
          className="absolute top-[6%] right-[10%] w-[350px] h-[550px]"
        />
        <div className="absolute top-[69px] left-[480px] bg-white rounded-[50px] w-[349px] h-[44px] realtive z-10">
          <img
            src={Vector}
            alt="Vector"
            className="absolute left-[13px] top-[10px] w-[22px] h-[20px]"
          />
          <p className="absolute left-[45px] top-[10px]  bg-gradient-to-r from-[#003F79] to-[#00ACDB] bg-clip-text text-transparent  font-semibold font-alkatra ">
            Just Real State Investments...No Bull
          </p>
          <div
            className="absolute left-[303px] top-[20px] w-[50px] h-[50px] bg-white rotate-[170deg]"
            style={{
              clipPath: "polygon(0 0, 100% 100%, 0 100%)",
            }}
          ></div>
        </div>
        <div className="absolute top-[30%] left-[5%]">
          <h1 className="font-bold not-italic text-[50px] leading-[64px] tracking-[0%]  text-[#FFFFFF] text-shadow-[3px_4px_5px_rgba(0,0,0,0.6)]">
            Enter The Address.We'll show
          </h1>
          <h1 className="font-bold not-italic text-[50px] leading-[64px] tracking-[0%]  text-[#FFFFFF] text-shadow-[3px_4px_5px_rgba(0,0,0,0.6)]">
            you what it's actually worth
          </h1>
        </div>
        <div className="absolute left-[70px] top-[330px] bg-white w-[680px] h-[55px] rounded-[10px] relative">
          <Button className=" absolute left-[512px] top-[5px] w-[163px] h-[45px] bg-gradient-to-r from-[#003F79] to-[#00ACDB] rounded-[8px] text-white  ">
            Search
          </Button>
          <img
            src={Search}
            alt="Search"
            className="absolute left-[20px] top-[15px] w-[24px] h-[24px]"
          />
          <p className="absolute left-[55px] top-[15px] text-[#9593A2]">
            Search Property...
          </p>
          <p className="absolute left-[5px] top-[80px] font-semibold text-[28px] leading-[100%] tracking-[-1%] text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.33)] [-webkit-text-stroke:1px_rgba(0,0,0,1)]">
            Download it.Use it.Pay when it makes sense.
          </p>
        </div>
        <div className="absolute left-[73px] top-[460px] w-[322px] h-[58px] bg-white rounded-[13px] ">
          <img
            src={Group}
            alt="Group"
            className=" absolute top-[4px] left-[3px] w-[314px] h-[49px]"
          />
        </div>
      </section>
    </>
  );
}

export default MainSection;
