import React from "react";
import Section2Image from "../assets/GroupSection2.png";
import Button from "../Component/Button";
function Section2() {
  return (
    <>
      <div className="relative w-[100%] h-[400px] bg-[rgba(243,246,249,1)] flex flex-col align-center justify-center items-center gap-[30px]">
        <p className=" bg-gradient-to-l from-[#00ACDB] to-[#C830EB] bg-clip-text text-transparent  font-semibold leading-[100%]  tracking-[0] text-[16px]">
          GET NATIONAL EXPOUSER TO REAL ESTATE INVESTORS
        </p>
          <img
            src={Section2Image}
            alt="Section2"
            className="w-[700px] h-[75px] "
          />
        <Button className="h-[49px] w-[126px] rounded-[8px] bg-gradient-to-r from-[#003F79] to-[#00ACDB] text-white absolute top-[300px] left-1/2 -translate-x-1/2">
          Click Here
        </Button>
      </div>
    </>
  );
}

export default Section2;
