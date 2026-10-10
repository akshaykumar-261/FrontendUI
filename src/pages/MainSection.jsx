import backgroundImage from "../assets/backImage.png";
import Zoom from "../assets/zoom.png";
import Bull from "../assets/Freddie Bullworth 3 1.png";
import Button from "../Component/Button";
import Search from "../assets/search-2-line.png";
import Vector from "../assets/Vector.png";
import Group from "../assets/Group 568.png";

function MainSection() {
  return (
    <section
      className="relative min-h-[calc(100vh-70px)] w-full overflow-hidden bg-cover bg-center sm:min-h-[calc(100vh-90px)]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay for readability on small screens */}
      <div className="absolute inset-0 bg-black/40 lg:bg-transparent" />

      {/* Decorative bull (desktop only) */}
      <img
        src={Bull}
        alt="Bull"
        className="absolute right-[6%] top-[10%] hidden h-[600px] w-[350px] object-contain lg:block"
      />

      {/* Zoom badge */}
      <div className="absolute right-4 top-4 z-20 flex h-[70px] w-[70px] items-center justify-center rounded-[12px] bg-gradient-to-tl from-[#1C1A1B] to-[#5B5555] sm:right-[2%] sm:top-[4%] sm:h-[90px] sm:w-[95px] lg:h-[103px] lg:w-[108px]">
        <img src={Zoom} alt="Zoom" className="h-[28px] w-[28px] sm:h-[38px] sm:w-[38px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col px-4 pb-12 pt-10 sm:px-6 lg:px-10 lg:pt-24">
        {/* Tagline pill */}
        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2">
          <img src={Vector} alt="Vector" className="h-[18px] w-[20px]" />
          <p className="bg-gradient-to-r from-[#003F79] to-[#00ACDB] bg-clip-text font-alkatra font-semibold text-transparent text-sm sm:text-base">
            Just Real State Investments...No Bull
          </p>
        </div>

        {/* Heading */}
        <h1 className="mt-8 max-w-[760px] text-3xl font-bold leading-tight tracking-[0%] text-white drop-shadow-[3px_4px_5px_rgba(0,0,0,0.6)] sm:text-4xl lg:mt-16 lg:text-[50px] lg:leading-[64px]">
          Enter The Address. We'll show you what it's actually worth
        </h1>

        {/* Search bar */}
        <div className="mt-8 flex w-full max-w-[680px] items-center gap-2 rounded-[10px] bg-white p-2 sm:mt-10">
          <img src={Search} alt="Search" className="ml-2 h-[24px] w-[24px] shrink-0" />
          <input
            type="text"
            placeholder="Search Property..."
            className="min-w-0 flex-1 bg-transparent text-[#9593A2] outline-none"
          />
          <Button className="h-[45px] shrink-0 rounded-[8px] bg-gradient-to-r from-[#003F79] to-[#00ACDB] px-5 text-white sm:px-8">
            Search
          </Button>
        </div>

        <p className="mt-5 max-w-[680px] text-lg font-semibold leading-snug text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.33)] [-webkit-text-stroke:1px_rgba(0,0,0,1)] sm:text-2xl">
          Download it. Use it. Pay when it makes sense.
        </p>

        {/* App store badges */}
        <div className="mt-6 w-[240px] rounded-[13px] bg-white p-1 sm:w-[322px]">
          <img src={Group} alt="Group" className="h-auto w-full" />
        </div>
      </div>
    </section>
  );
}

export default MainSection;
