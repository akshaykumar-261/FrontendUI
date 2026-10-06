import React from "react";
import InvestorCard from "../Component/InvestorCard";
import TownImg from "../assets/TownImg.png";
import ChristopherImg from "../assets/Christopher.png";
import AlexandraImg from "../assets/Alexandra.png";
import JohnImg from "../assets/John.png";
import Button from "../Component/Button";
function Investor() {
  const investorsData = [
    {
      name: "John",
      role: "Investor",
      image: JohnImg,
    },
    {
      name: "Alexandra",
      role: "Investor",
      image: AlexandraImg,
    },
    {
      name: "Christopher",
      role: "Investor",
      image: ChristopherImg,
    },
  ];
  const positions = ["top-60 left-207 ", "top-30 right-80", "top-40 right-40"];

  return (
    <div className="relative mt-112 h-[500px] bg-gradient-to-r from-[#00ACDB] via-[#A6F0F7] to-[#FDE3FA] overflow-hidden">
      <div
        className="absolute top-[60px] left-[550px] w-[800px] h-[380px] bg-cover bg-center bg-no-repeat rounded-[14px]  relative"
        style={{ backgroundImage: `url(${TownImg})` }}
      ></div>
      {investorsData.map((item, index) => (
        <InvestorCard
          key={index}
          name={item.name}
          role={item.role}
          image={item.image}
          positionClass={positions[index]}
        />
      ))}
      <div className="absolute top-[100px] left-[160px] bg-white  w-[490px] h-[300px] rounded-[14px]">
        <p className="text-[40px] font-bold ml-10 mt-5 bg-gradient-to-r from-[#C830EB] to-[#00ACDB] bg-clip-text text-transparent">
          FREE Verified
        </p>
        <p className="text-[40px] font-bold ml-10  bg-gradient-to-r from-[#C830EB] to-[#00ACDB] bg-clip-text text-transparent">
          Investor ID CARD
        </p>
        <p className=" ml-10">Get on the Map and let our sellers reach</p>
        <p className=" ml-10">you DIRECT!</p>
      </div>
    </div>
  );
}

export default Investor;
