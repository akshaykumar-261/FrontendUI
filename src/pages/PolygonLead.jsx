import BlurTick from "../assets/BlueTick.png";
import MapIng from "../assets/MapImg.png";
import SerachIcon from "../assets/searchIcon.png";

function PolygonLead() {
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
    <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-10">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
        {/* Left: heading + feature grid */}
        <div className="w-full lg:max-w-[620px]">
          <div className="flex flex-wrap items-center gap-2 text-[26px] font-semibold sm:text-[32px]">
            <span className="bg-gradient-to-r from-[#003F79] to-[#00ACDB] bg-clip-text text-transparent">
              Polygon
            </span>
            <span className="text-[#575665]">Lead Search</span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {featuresList.map((item, index) => (
              <div
                key={index}
                className="flex h-[69px] w-full items-center gap-4 rounded-[14px] bg-white px-5 shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
              >
                <img src={BlurTick} alt="BlurTick Icon" className="h-[18px] w-[18px]" />
                <h3 className="text-[16px] font-medium text-[#1C1A1B]">{item}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Right: map */}
        <div
          className="relative h-[300px] w-full rounded-[37px] bg-cover bg-center bg-no-repeat sm:h-[430px] lg:h-[430px] lg:max-w-[430px]"
          style={{ backgroundImage: `url(${MapIng})` }}
        >
          <div className="absolute left-1/2 top-[20px] flex h-[50px] w-[90%] max-w-[370px] -translate-x-1/2 items-center rounded-[5px] bg-white">
            <img src={SerachIcon} alt="Search Icon" className="absolute left-[20px] h-[18px] w-[18px]" />
            <p className="absolute left-[48px] text-[15px] font-medium">Polygon Search</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PolygonLead;
