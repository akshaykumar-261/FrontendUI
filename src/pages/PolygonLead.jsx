import React from "react";
import BlurTick from "../assets/BlueTick.png";
import MapIng from "../assets/MapImg.png";
import SerachIcon from "../assets/searchIcon.png"
function PolygonLead() {
  // Features data array jaisa screenshot mein diya gaya hai
  const featuresList = [
    "FSBO (Coming Soon!)",
    "Retiree Homeowners",
    "Expired Listing (Coming Soon!)",
    "Tax Delinquency",
    "Pre-Foreclosure",
    "Foreclosure",
    "High Equity",
    "Lis Pendens",
    "Underwater Mortgage",
    "Likely to Sell",
  ];

  return (
    <div className="relative w-full w-[1300px] top-[320px]">
      <div className="absolute left-[100px]">
        <div className="flex items-center gap-2 text-[32px] font-semibold">
          <span className="bg-gradient-to-r from-[#003F79] to-[#00ACDB] bg-clip-text text-transparent">
            Polygon
          </span>
          <span className="text-[#575665]">Lead Search</span>
        </div>
      </div>

      <div className="absolute top-[50px] left-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:w-[620px]">
          {featuresList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[14px] w-full h-[69px] px-5 flex items-center gap-4 shadow-[0_4px_12px_rgba(0,0,0,0.06)] "
            >
              <img
                src={BlurTick}
                alt="BlurTick Icon"
                className="w-[18px] h-[18px]"
              />
              <h3 className="text-[#1C1A1B] font-medium text-[16px]">{item}</h3>
            </div>
          ))}
        </div>
      </div>
      <div
        className="absolute top-[20px] left-[790px] w-[430px] h-[430px] bg-cover bg-center bg-no-repeat rounded-[37px]  relative"
        style={{ backgroundImage: `url(${MapIng})` }}
      >
        <div className="bg-white rounded-[5px] h-[50px] w-[370px] absolute top-[20px] left-[30px] relative">
          <img
            src={SerachIcon}
            alt="SerachIcon Icon"
            className="w-[18px] h-[18px] absolute top-[15px] left-[20px]"
          />
          <p className=" absolute top-[12px] left-[48px] font-medium text-[15px]">Polugon Search</p>
        </div>
      </div>
    </div>
  );
}

export default PolygonLead;
