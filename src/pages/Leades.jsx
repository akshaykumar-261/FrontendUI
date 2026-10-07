import React from "react";
import HomeSaleImg from "../assets/HomeSale.png";
import TickIcon from "../assets/LeaderTickImg.png";
import HeroIcon from "../assets/HeroIcon.png";
import Button from "../Component/Button";
import DollarImg from "../assets/DollarImg.png";
import People from "../assets/PeopleImg.png"
function Leades() {
  return (
    <div className="h-[600px] w-full relative">
      <div className="flex flex-col items-center justify-center mt-20 text-[35px] font-bold ">
        <p className="bg-gradient-to-r from-[#C830EB] to-[#00ACDB] bg-clip-text text-transparent">
          Real Investors, Real Leads
        </p>
        <p className="bg-gradient-to-r from-[#C830EB] to-[#00ACDB] bg-clip-text text-transparent">
          in Real-Time
        </p>
      </div>
      <div className=" absolute top-[150px] w-full h-[420px] flex items-center justify-center gap-10">
        <div className="relative h-[400px] w-[580px] rounded-[10px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${HomeSaleImg})`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ACDB]/70 via-[#A6F0F7]/50 to-[#FDE3FA]/70"></div>
          <div className=" absolute left-[280px] top-[40px] h-[40px] w-[270px] rounded-[5px]  bg-white flex items-center justify-center font-semibold gap-2">
            <img src={TickIcon} alt="TickIcon" className=" w-[19px] h-[19px]" />
            <p className="text-[#2B3842]"> LetsNetwork@flippbidd.com</p>
          </div>
          <div className="absolute top-[50px] left-[40px] bg-white rounded-[50%] h-[60px] w-[60px] flex items-center justify-center">
            <img src={HeroIcon} alt="HeroIcon" className=" w-[30px] h-[30px]" />
          </div>
          <div className="absolute top-[140px] left-[45px] font-semibold text-[20px] text-[#000F1B]">
            <p>FlippBidd Pro-Services</p>
          </div>
          <div className="absolute top-[190px] left-[45px]">
            <p className="text-[#2B3842]">
              A premium platform connecting real estate{" "}
            </p>
            <p className="text-[#2B3842]">
              professionals with top-tier investment{" "}
            </p>
            <p className="text-[#2B3842]">
              opportunities, tools, and resources.
            </p>
          </div>
          <div className="absolute top-[310px] left-[45px] bg-white rounded-[9px]">
            <Button className=" h-[50px] w-[150px] rounded-[9px] bg-gradient-to-r from-[#C830EB] to-[#00ACDB] bg-clip-text text-transparent">
              <p className="bg-gradient-to-r from-[#C830EB] to-[#00ACDB] bg-clip-text text-transparent font-semibold">
                Contact Us
              </p>
            </Button>
          </div>
        </div>

        <div className="relative h-[400px] w-[580px] rounded-[10px] overflow-hidden bg-transparent">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 "
            style={{
              backgroundImage: `url(${People})`,
            }}
          ></div>

          <div className=" absolute left-[280px] top-[40px] h-[40px] w-[270px] rounded-[5px]  bg-white flex items-center justify-center font-semibold gap-2">
            <img src={TickIcon} alt="TickIcon" className=" w-[19px] h-[19px]" />
            <p className="text-[#2B3842]"> LetsNetwork@flippbidd.com</p>
          </div>
          <div className="absolute top-[50px] left-[40px] bg-white rounded-[50%] h-[60px] w-[60px] flex items-center justify-center">
            <img
              src={DollarImg}
              alt="DollarImg"
              className=" w-[60px] h-[60px]"
            />
          </div>
          <div className="absolute top-[140px] left-[45px] font-semibold text-[20px] text-[#000F1B]">
            <p>National Lenders</p>
          </div>
          <div className="absolute top-[190px] left-[45px]">
            <p className="text-[#2B3842]">
              Stay ahead of the Competition! Get Real-Time
            </p>
            <p className="text-[#2B3842]">
              Leads of Investors Nationally right to your Inbox or
            </p>
            <p className="text-[#2B3842]">
              CRM's when they view a real-estate investment.
            </p>
          </div>
          <div className="absolute top-[310px] left-[45px] bg-white rounded-[9px]">
            <Button className=" h-[50px] w-[150px] rounded-[9px] bg-gradient-to-r from-[#003F79] to-[#00ACDB] font-semibold text-white">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leades;
