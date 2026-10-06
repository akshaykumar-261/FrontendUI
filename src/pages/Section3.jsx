import React from "react";
import Vector from "../assets/Vector 2.png";
import LaptopImg from "../assets/LaptopImg.png";
import Silver from "../assets/Silver.png";
import Mockup from "../assets/Mockup.png";
import HutIcon from "../assets/hutIcon.png";
import HutSearch from "../assets/hutSearch.png";
import HutRect from "../assets/HutRect.png";
import HutTick from "../assets/HutBlueTick.png";
import HandImg from "../assets/HandImg.png";
function Section3() {
  const featuresList = [
    "Source Off-Market Deals",
    "Polygon Lead Search",
    "Showcase Your Investments",
    "Property Data & Comps",
    "Network - In App Calls/Messaging",
    "FlippBidd One Touch",
    "National Skiptracing, and More...",
  ];
  return (
    <>
      <div className="relative">
        <div className="relative">
          <p className="font-semibold bg-gradient-to-r from-[#003F79] to-[#00ACDB] bg-clip-text text-transparent text-[27px] top-[50px] left-[100px] absolute">
            FlipBidd
          </p>
          <p className=" absolute text-[27px] top-[50px] left-[220px] font-semibold text-[#575665]">
            Key
          </p>
          <p className="absolute text-[25px] font-bold font-semibold text-[#575665] top-[90px] left-[100px] ">
            Features
          </p>
        </div>
        <div className=" absolute top-[150px] left-[80px] flex flex-col gap-4 w-[650px]">
          {featuresList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[14px] w-[450px] h-[71px] flex items-center gap-5 shadow-[0_4px_12px_rgba(0,0,0,0.06)] "
            >
              <img
                src={Vector}
                alt="Vector Icon"
                className="w-[18px] h-[18px] "
              />
              <h3 className="text-[#1C1A1B] font-medium text-[16px]">{item}</h3>
            </div>
          ))}
        </div>
        <div className="rounded-[50%] absolute top-[180px] left-[650px] h-[518px] w-[518px] bg-gradient-to-r from-[#A6F0F7]  to-[#FDE3FA] relative">
          <div className="bg-black h-[278px] w-[453px] absolute top-[120px] left-[34px] flex items-center justify-center">
            <img
              src={LaptopImg}
              alt="LaptopImg"
              className="h-[250px] w-[430px]"
            />
          </div>
          <div className="absolute top-[70px] left-[340px] w-[220px] h-[55px] bg-gradient-to-r from-[#003F79] to-[#00ACDB] rounded-[14px] z-0 flex items-center justify-center">
            <div className="absolute top-[1px] left-[1px] bg-white rounded-[13px] w-[218px] h-[53px] flex items-center justify-center">
              <p className="text-[#00ACDB] text-[17px]">FlippBidd One Touch</p>
            </div>
          </div>
        </div>
        <div className="absolute left-[620px] top-[252px] w-[196px] h-[55px] border border-[#00ACDB] rounded-[14px] flex items-center justify-center bg-white">
          <p className="text-[#00ACDB]">Sell My Deal</p>
        </div>
        <div
          className="absolute top-[380px] left-[1030px] w-[132px] h-[261px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: `url(${Silver})` }}
        >
          <img
            src={Mockup}
            alt="Mockup"
            className="w-[118px] h-[256px] object-contain"
          />
        </div>
        <div className="absolute top-[550px] left-[1050px] w-[190px] h-[50px] bg-gradient-to-r from-[#C830EB] to-[#00ACDB] rounded-[14px] z-0 flex items-center justify-center">
          <div className="absolute top-[1px] left-[1px] bg-white rounded-[13px] w-[188px] h-[47px] flex items-center justify-center">
            <p className="text-[#00ACDB] text-[17px] bg-gradient-to-l from-[#00ACDB] to-[#C830EB] bg-clip-text text-transparent">
              Contract Holders
            </p>
          </div>
        </div>
        <div className="absolute top-[660px] left-[720px] border border-[#575665] bg-white rounded-[13px] w-[196px] h-[55px] flex items-center justify-center">
          <p className="text-[#00ACDB] text-[17px] bg-gradient-to-r from-[#9AA1AB] to-[#575665] bg-clip-text text-transparent">
            Find My Lead
          </p>
        </div>
        <div className="absolute rounded-[50%] bg-white h-[65px] w-[65px] top-[476px] left-[1170px] shadow-[0px_10.85px_43.38px_rgba(219,222,225,1)] realtive">
          <img
            src={HutIcon}
            alt="HutIcon"
            className=" object-contain absolute left-[8px] top-[7px] "
          />
        </div>
        <div className="absolute rounded-[50%] bg-white h-[65px] w-[65px] top-[550px] left-[720px] realtive">
          <img
            src={HutSearch}
            alt="HutSearch"
            className=" object-contain absolute left-[10px] top-[10px] "
          />
        </div>
        <div className="absolute rounded-[50%] bg-white h-[65px] w-[65px] top-[180px] left-[740px] realtive">
          <img
            src={HutRect}
            alt="HutRect"
            className=" object-contain absolute left-[8px] top-[7px]  "
          />
        </div>
        <div className="absolute rounded-[50%] bg-white h-[80px] w-[80px] top-[160px] left-[1000px] flex items-center justify-center">
          <div className="rounded-[50%] bg-gradient-to-r from-[#003F79] to-[#00ACDB] h-[70px] w-[70px]">
            <img
              src={HutTick}
              alt="HutSearch"
              className=" object-contain absolute h-[35px] left-[14px] top-[13px] "
            />
            <img
              src={HandImg}
              alt="HandImg"
              className=" object-contain absolute h-[35px] left-[30px] top-[36px] "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
