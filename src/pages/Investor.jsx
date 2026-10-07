import React from "react";
import InvestorCard from "../Component/InvestorCard";
import TownImg from "../assets/TownImg.png";
import ChristopherImg from "../assets/Christopher.png";
import AlexandraImg from "../assets/Alexandra.png";
import JohnImg from "../assets/John.png";
import Button from "../Component/Button";
import Line1 from "../assets/Line1.svg";
import Line2 from "../assets/Line2.svg"
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
      <img
        src={Line1}
        alt="Line1 Icon"
        className=" object-cover rounded-[10px] w-[290px] absolute top-[120px] left-[983px]"
      />
      <img
        src={Line2}
        alt="Line2 Icon"
        className=" object-cover rounded-[10px] w-[350px] absolute top-[280px] left-[900px] rotate-[150deg]"
      />
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
        <p className=" ml-10 text-[#575665]">
          Get on the Map and let our sellers reach
        </p>
        <p className=" ml-10 text-[#575665]">you DIRECT!</p>
      </div>
      <Button className=" absolute top-[300px] left-[200px] bg-gradient-to-r from-[#C830EB] to-[#00ACDB] h-[50px] w-[150px] rounded-[8px] font-semibold text-white">
        Click Here
      </Button>
    </div>
  );
}

export default Investor;
