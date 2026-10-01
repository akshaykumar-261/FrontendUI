import React from "react";
import logo from "../assets/logo.png";
import Button from "./Button";
function NabBar() {
  return (
    <nav className=" h-[90px] w-full flex">
      <div className="px-[100px] flex w-full">
        <img src={logo} alt="Logo" className="h-[90px] " />

        <div className=" h-[90px] py-[35px]  flex items-center w-full  ml-auto">
          <ul className="flex gap-8 items-center h-full text-black text-[16px]">
            <li className="text-[16px]">Home</li>
            <li className="text-[16px]">7 Day Trial</li>
            <li className="text-[16px]">Submit Property</li>
          </ul>

          <div className="w-[368px] h-[90px] text-[#00ACDB] flex items-center justify-end gap-2 ml-auto">
            <Button className="bg-[#CCF1F7] w-[160px] h-[49px] font-bold rounded-[8.07px]">
              Book a Demo
            </Button>
            <Button className="h-[49px] w-[126px] bg-gradient-to-r  from-[#003F79] to-[#00ACDB] text-white font-bold rounded-[8.07px]">
              Sign Up
            </Button>
            <Button className="h-[49px] w-[126px] bg-gradient-to-r from-[#003F79] to-[#00ACDB] text-white font-bold rounded-[8.07px]">
              Log In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NabBar;
