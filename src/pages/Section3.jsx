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
    <section className="relative mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-4">
        {/* Left: heading + features */}
        <div className="w-full lg:max-w-[520px]">
          <h2 className="text-[27px] font-semibold">
            <span className="bg-gradient-to-r from-[#003F79] to-[#00ACDB] bg-clip-text text-transparent">
              FlipBidd
            </span>{" "}
            <span className="text-[#575665]">Key</span>
          </h2>
          <p className="text-[25px] font-bold text-[#575665]">Features</p>

          <div className="mt-8 flex flex-col gap-4">
            {featuresList.map((item, index) => (
              <div
                key={index}
                className="flex h-[71px] w-full max-w-[450px] items-center gap-5 rounded-[14px] bg-white px-6 shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
              >
                <img src={Vector} alt="Vector Icon" className="h-[18px] w-[18px]" />
                <h3 className="text-[16px] font-medium text-[#1C1A1B]">{item}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Right: scalable decorative graphic */}
        <div className="relative h-[300px] w-full overflow-hidden sm:h-[420px] lg:h-[580px] lg:flex-1">
          <div className="absolute left-1/2 top-0 h-[580px] w-[660px] origin-top [transform:translateX(-50%)_scale(0.5)] sm:[transform:translateX(-50%)_scale(0.7)] lg:[transform:translateX(-50%)_scale(1)]">
            {/* Gradient circle */}
            <div className="absolute left-[50px] top-[30px] h-[518px] w-[518px] rounded-[50%] bg-gradient-to-r from-[#A6F0F7] to-[#FDE3FA]">
              <div className="absolute left-[34px] top-[120px] flex h-[278px] w-[453px] items-center justify-center bg-black">
                <img src={LaptopImg} alt="LaptopImg" className="h-[250px] w-[430px]" />
              </div>
            </div>

            {/* FlippBidd One Touch pill */}
            <div className="absolute left-[390px] top-[100px] flex h-[55px] w-[220px] items-center justify-center rounded-[14px] bg-gradient-to-r from-[#003F79] to-[#00ACDB]">
              <div className="absolute left-[1px] top-[1px] flex h-[53px] w-[218px] items-center justify-center rounded-[13px] bg-white">
                <p className="text-[17px] text-[#00ACDB]">FlippBidd One Touch</p>
              </div>
            </div>

            {/* Sell My Deal */}
            <div className="absolute left-[20px] top-[102px] flex h-[55px] w-[196px] items-center justify-center rounded-[14px] border border-[#00ACDB] bg-white">
              <p className="text-[#00ACDB]">Sell My Deal</p>
            </div>

            {/* Phone mockup */}
            <div
              className="absolute left-[430px] top-[230px] flex h-[261px] w-[132px] items-center justify-center bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${Silver})` }}
            >
              <img src={Mockup} alt="Mockup" className="h-[256px] w-[118px] object-contain" />
            </div>

            {/* Contract Holders */}
            <div className="absolute left-[450px] top-[400px] flex h-[50px] w-[190px] items-center justify-center rounded-[14px] bg-gradient-to-r from-[#C830EB] to-[#00ACDB]">
              <div className="absolute left-[1px] top-[1px] flex h-[47px] w-[188px] items-center justify-center rounded-[13px] bg-white">
                <p className="bg-gradient-to-l from-[#00ACDB] to-[#C830EB] bg-clip-text text-[17px] text-transparent">
                  Contract Holders
                </p>
              </div>
            </div>

            {/* Find My Lead */}
            <div className="absolute left-[120px] top-[510px] flex h-[55px] w-[196px] items-center justify-center rounded-[13px] border border-[#575665] bg-white">
              <p className="bg-gradient-to-r from-[#9AA1AB] to-[#575665] bg-clip-text text-[17px] text-transparent">
                Find My Lead
              </p>
            </div>

            {/* Floating hut icons */}
            <div className="absolute left-[570px] top-[326px] h-[65px] w-[65px] rounded-[50%] bg-white shadow-[0px_10.85px_43.38px_rgba(219,222,225,1)]">
              <img src={HutIcon} alt="HutIcon" className="absolute left-[8px] top-[7px] object-contain" />
            </div>
            <div className="absolute left-[120px] top-[400px] h-[65px] w-[65px] rounded-[50%] bg-white">
              <img src={HutSearch} alt="HutSearch" className="absolute left-[10px] top-[10px] object-contain" />
            </div>
            <div className="absolute left-[140px] top-[30px] h-[65px] w-[65px] rounded-[50%] bg-white">
              <img src={HutRect} alt="HutRect" className="absolute left-[8px] top-[7px] object-contain" />
            </div>
            <div className="absolute left-[400px] top-[10px] flex h-[80px] w-[80px] items-center justify-center rounded-[50%] bg-white">
              <div className="h-[70px] w-[70px] rounded-[50%] bg-gradient-to-r from-[#003F79] to-[#00ACDB]">
                <img src={HutTick} alt="HutTick" className="absolute left-[14px] top-[13px] h-[35px] object-contain" />
                <img src={HandImg} alt="HandImg" className="absolute left-[30px] top-[36px] h-[35px] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
