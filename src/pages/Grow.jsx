import React from "react";
import BgImage from "../assets/BgImage.png";
import Tick from "../assets/whiteTick.svg";
import TickTokImg from "../assets/TickTok.svg";
import FacebookIcon from "../assets/facebook.png";
import MessagnerIcon from "../assets/Messanger.png";
import InstagramIcon from "../assets/Instagram.png";
import WhatsppIcon from "../assets/whatsapp.png";
import TwitterIcon from "../assets/Twitter.png";
function Grow() {
  return (
    <div className="relative h-[450px] bg-gradient-to-r from-[#00ACDB] via-[#A6F0F7] to-[#FDE3FA]">
      <div className="absolute top-[20px] w-full h-[430px] bg-white">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${BgImage})`,
          }}
        >
          <div className="flex justify-evenly">
            <div className=" w-[700px] h-[430px] relative ">
              <p className="ml-10 text-[45px] absolute top-[100px] font-bold text-white">
                Let's Grow our
              </p>
              <p className="ml-10 absolute top-[160px] text-[45px] font-bold text-white">
                Community Together
              </p>
              <p
                className="ml-11 absolute top-[230px] font-semibold text-[18px] text-white"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0, 172, 219, 1) 0%, rgba(166, 240, 247, 1) 50%, rgba(253, 227, 250, 1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))",
                }}
              >
                Inquire about our Affiliate Program Today.
              </p>
              <div className="absolute top-[290px] rounded-[10px] left-[43px] bg-white h-[50px] w-[250px] flex items-center justify-center">
                <p className="font-semibold bg-gradient-to-r from-[#003F79] to-[#00ACDB] bg-clip-text text-transparent">
                  Become a FlippBidd Affiliate
                </p>
              </div>
              <div className="absolute top-[290px] rounded-[10px] left-[330px] h-[50px] w-[290px] flex items-center justify-center bg-transparent border border-white gap-1">
                <img
                  src={Tick}
                  alt="Tick Icon"
                  className=" object-cover rounded-[10px]"
                />
                <p className="font-semibold text-white">
                  LetsNetwork@flippbidd.com
                </p>
              </div>
            </div>
            <div className=" w-[700px] h-[430px] flex items-center justify-center">
              <div className="relative grid grid-cols-3 gap-5">
                <div className="bg-black rounded-[50%] h-[70px] w-[70px] flex items-center justify-center">
                  <img
                    src={TickTokImg}
                    alt="TickTokImg Icon"
                    className="w-[50px] object-cover rounded-[10px]"
                  />
                </div>
                <div className="bg-[#3B579D] rounded-[50%] h-[70px] w-[70px] flex items-center justify-center">
                  <img
                    src={FacebookIcon}
                    alt="FacebookIcon"
                    className="w-[50px] object-cover rounded-[10px]"
                  />
                </div>
                <div className="bg-white rounded-[50%] h-[70px] w-[70px] flex items-center justify-center">
                  <img
                    src={MessagnerIcon}
                    alt="MessagnerIcon"
                    className="w-[50px] object-cover rounded-[10px]"
                  />
                </div>
                <div className="bg-white rounded-[50%] h-[70px] w-[70px] flex items-center justify-center">
                  <img
                    src={InstagramIcon}
                    alt="InstagramIcon"
                    className="w-[50px] object-cover rounded-[10px]"
                  />
                </div>
                <div className="bg-white rounded-[50%] h-[70px] w-[70px] flex items-center justify-center">
                  <img
                    src={WhatsppIcon}
                    alt="WhatsppIcon"
                    className="w-[50px] object-cover rounded-[10px]"
                  />
                </div>
                <div className="bg-black rounded-[50%] h-[70px] w-[70px] flex items-center justify-center">
                  <img
                    src={TwitterIcon}
                    alt=" TwitterIcon"
                    className="w-[50px] object-cover rounded-[10px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grow;
