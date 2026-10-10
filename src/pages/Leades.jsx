import HomeSaleImg from "../assets/HomeSale.png";
import TickIcon from "../assets/LeaderTickImg.png";
import HeroIcon from "../assets/HeroIcon.png";
import Button from "../Component/Button";
import DollarImg from "../assets/DollarImg.png";
import People from "../assets/PeopleImg.png";

function Leades() {
  return (
    <section className="w-full px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center text-center text-[26px] font-bold sm:text-[35px]">
          <p className="bg-gradient-to-r from-[#C830EB] to-[#00ACDB] bg-clip-text text-transparent">
            Real Investors, Real Leads
          </p>
          <p className="bg-gradient-to-r from-[#C830EB] to-[#00ACDB] bg-clip-text text-transparent">
            in Real-Time
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-10 lg:flex-row">
          {/* Card 1 */}
          <div className="relative w-full max-w-[580px] overflow-hidden rounded-[10px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${HomeSaleImg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ACDB]/70 via-[#A6F0F7]/50 to-[#FDE3FA]/70" />
            <div className="relative z-10 flex min-h-[400px] flex-col p-6 sm:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[50%] bg-white">
                  <img src={HeroIcon} alt="HeroIcon" className="h-[30px] w-[30px]" />
                </div>
                <div className="flex h-[40px] items-center justify-center gap-2 rounded-[5px] bg-white px-3 font-semibold">
                  <img src={TickIcon} alt="TickIcon" className="h-[19px] w-[19px]" />
                  <p className="text-[13px] text-[#2B3842] sm:text-[15px]">
                    LetsNetwork@flippbidd.com
                  </p>
                </div>
              </div>
              <p className="mt-6 text-[20px] font-semibold text-[#000F1B]">
                FlippBidd Pro-Services
              </p>
              <p className="mt-3 max-w-[420px] text-[#2B3842]">
                A premium platform connecting real estate professionals with
                top-tier investment opportunities, tools, and resources.
              </p>
              <div className="mt-auto pt-6">
                <Button className="h-[50px] w-[150px] rounded-[9px] bg-white">
                  <p className="bg-gradient-to-r from-[#C830EB] to-[#00ACDB] bg-clip-text font-semibold text-transparent">
                    Contact Us
                  </p>
                </Button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-full max-w-[580px] overflow-hidden rounded-[10px]">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${People})` }}
            />
            <div className="relative z-10 flex min-h-[400px] flex-col p-6 sm:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[50%] bg-white">
                  <img src={DollarImg} alt="DollarImg" className="h-[60px] w-[60px]" />
                </div>
                <div className="flex h-[40px] items-center justify-center gap-2 rounded-[5px] bg-white px-3 font-semibold">
                  <img src={TickIcon} alt="TickIcon" className="h-[19px] w-[19px]" />
                  <p className="text-[13px] text-[#2B3842] sm:text-[15px]">
                    LetsNetwork@flippbidd.com
                  </p>
                </div>
              </div>
              <p className="mt-6 text-[20px] font-semibold text-[#000F1B]">
                National Lenders
              </p>
              <p className="mt-3 max-w-[430px] text-[#2B3842]">
                Stay ahead of the Competition! Get Real-Time Leads of Investors
                Nationally right to your Inbox or CRM's when they view a
                real-estate investment.
              </p>
              <div className="mt-auto pt-6">
                <Button className="h-[50px] w-[150px] rounded-[9px] bg-gradient-to-r from-[#003F79] to-[#00ACDB] font-semibold text-white">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Leades;
