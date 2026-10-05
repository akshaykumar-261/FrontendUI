import React from "react";
import Vector from "../assets/Vector 2.png"; // Aapka check/tick vector icon
import MapImg from "../assets/LaptopImg.png"; // Aapka map/mockup image asset

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
    <div className="relative w-full w-[1300px] top-[400px]">
      {/* Title Section */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-[32px] font-semibold">
          <span className="bg-gradient-to-r from-[#003F79] to-[#00ACDB] bg-clip-text text-transparent">
            Polygon
          </span>
          <span className="text-[#575665]">Lead Search</span>
        </div>
      </div>

      {/* Main Container (Left Grid + Right Map Mockup) */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side: Mapped Features List (2-Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:w-[620px]">
          {featuresList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[14px] w-full h-[69px] px-5 flex items-center gap-4 shadow-[0_4px_12px_rgba(0,0,0,0.06)] "
            >
              <div className="w-[28px] h-[28px] rounded-full bg-[#00ACDB] flex items-center justify-center shrink-0">
                <img
                  src={Vector}
                  alt="Check Icon"
                  className="w-[14px] h-[14px] object-contain filter brightness-0 invert"
                />
              </div>
              {/* Feature Text */}
              <h3 className="text-[#1C1A1B] font-medium text-[16px]">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PolygonLead;
