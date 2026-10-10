import InvestorCard from "../Component/InvestorCard";
import TownImg from "../assets/TownImg.png";
import ChristopherImg from "../assets/Christopher.png";
import AlexandraImg from "../assets/Alexandra.png";
import JohnImg from "../assets/John.png";
import Button from "../Component/Button";
import Line1 from "../assets/Line1.svg";
import Line2 from "../assets/Line2.svg";

function Investor() {
  const investorsData = [
    { name: "John", role: "Investor", image: JohnImg },
    { name: "Alexandra", role: "Investor", image: AlexandraImg },
    { name: "Christopher", role: "Investor", image: ChristopherImg },
  ];
  const positions = ["top-[6%] left-[6%]", "bottom-[6%] left-[38%]", "top-[40%] right-[5%]"];

  return (
    <section className="mt-16 w-full overflow-hidden bg-gradient-to-r from-[#00ACDB] via-[#A6F0F7] to-[#FDE3FA] px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-10 lg:flex-row lg:gap-16">
        {/* Left card */}
        <div className="w-full max-w-[490px] rounded-[14px] bg-white p-6 sm:p-8">
          <p className="bg-gradient-to-r from-[#C830EB] to-[#00ACDB] bg-clip-text text-[28px] font-bold leading-tight text-transparent sm:text-[40px]">
            FREE Verified
          </p>
          <p className="bg-gradient-to-r from-[#C830EB] to-[#00ACDB] bg-clip-text text-[28px] font-bold leading-tight text-transparent sm:text-[40px]">
            Investor ID CARD
          </p>
          <p className="mt-4 text-[#575665]">
            Get on the Map and let our sellers reach you DIRECT!
          </p>
          <Button className="mt-6 h-[50px] w-[150px] rounded-[8px] bg-gradient-to-r from-[#C830EB] to-[#00ACDB] font-semibold text-white">
            Click Here
          </Button>
        </div>

        {/* Right: town image with investor cards */}
        <div
          className="relative aspect-[800/380] w-full max-w-[800px] rounded-[14px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${TownImg})` }}
        >
          <img
            src={Line1}
            alt="Line1 Icon"
            className="absolute left-[55%] top-[15%] w-[30%] rounded-[10px] object-cover"
          />
          <img
            src={Line2}
            alt="Line2 Icon"
            className="absolute bottom-[10%] right-[5%] w-[35%] rotate-[150deg] rounded-[10px] object-cover"
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
        </div>
      </div>
    </section>
  );
}

export default Investor;
