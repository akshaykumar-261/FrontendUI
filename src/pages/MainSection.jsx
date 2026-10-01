import React from "react";
import backgroundImage from "../assets/backImage.png";
import Zoom from "../assets/zoom.png";
import Bull from "../assets/Freddie Bullworth 3 1.png";
import Text from "../assets/text1.png"
function MainSection() {
  return (
    <>
      <section
        className="relative h-[calc(100vh-90px)] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute top-[4%] right-[2%] w-[108px] h-[103px]  bg-gradient-to-tl  from-[#1C1A1B] to-[#5B5555] rounded-[12px] flex items-center justify-center">
          <img src={Zoom} alt="Zoom" className="h-[38px] w-[38px]" />
        </div>
        <img
          src={Bull}
          alt="Bull"
          className="absolute top-[1%] right-[10%] w-[350px] h-[590px]"
        />
        <div className="absolute top-[30%] left-[5%]">
          <h1 className="text-4xl font-bold  text-[#FFFFFF]">
            Enter The Address.We'll show
          </h1>
          <h1 className="text-4xl font-bold  text-[#FFFFFF]">
            you what it's actually worth
          </h1>
        </div>
      </section>
    </>
  );
}

export default MainSection;
