import React from "react";
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
      className="
        relative
        w-full
        overflow-hidden
        bg-cover
        bg-center

        h-[600px]

        sm:h-[467px]

        md:h-[650px]

        lg:h-[calc(100vh-90px)]
      "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* ================= JOIN DEMO ================= */}
      <div
        className="
          absolute
          z-30

          top-[20px]
          right-[15px]

          w-[80px]
          h-[75px]

          sm:top-[20px]
          sm:right-[20px]
          sm:w-[62px]
          sm:h-[52px]

          md:top-[25px]
          md:right-[25px]
          md:w-[95px]
          md:h-[90px]

          lg:top-[4%]
          lg:right-[2%]
          lg:w-[108px]
          lg:h-[103px]

          bg-gradient-to-tl
          from-[#1C1A1B]
          to-[#5B5555]

          rounded-[12px]

          flex
          flex-col
          items-center
          justify-center
        "
      >
        <img
          src={Zoom}
          alt="Zoom"
          className="
            w-[25px]
            h-[25px]

            sm:w-[24px]
            sm:h-[23px]

            md:w-[32px]
            md:h-[32px]

            lg:w-[38px]
            lg:h-[38px]
          "
        />

        <p
          className="
            text-white
            font-semibold
            text-[11px]

            sm:text-[10px]
            md:text-[13px]
            lg:text-[16px]
          "
        >
          Join Demo
        </p>
      </div>

      {/* ================= BULL ================= */}
      <img
        src={Bull}
        alt="Bull"
        className="
          absolute
          z-10

          top-[70px]
          right-[-20px]

          w-[220px]
          h-auto

          sm:top-[75px]
          sm:right-[13px]
          sm:w-[250px]

          md:top-[65px]
          md:right-[10px]
          md:w-[290px]

          lg:top-[6%]
          lg:right-[10%]
          lg:w-[350px]
          lg:h-[550px]
        "
      />

      {/* ================= SLOGAN ================= */}
      <div
        className="
          absolute
          z-20

          top-[70px]
          left-[50%]
          -translate-x-1/2

          w-[285px]
          h-[40px]

          sm:top-[84px]
          sm:left-[261px]
          sm:w-[245px]
          sm:h-[42px]

          md:top-[75px]
          md:w-[350px]
          md:h-[44px]

          lg:top-[69px]
          lg:left-[480px]
          lg:translate-x-0
          lg:w-[349px]
          lg:h-[44px]

          bg-white
          rounded-[50px]
        "
      >
        <img
          src={Vector}
          alt="Vector"
          className="
            absolute

            left-[10px]
            top-[9px]

            w-[20px]
            h-[19px]

            sm:left-[12px]
            sm:top-[10px]

            md:w-[22px]
            md:h-[20px]
          "
        />

        <p
          className="
            absolute

            left-[38px]
            top-[10px]

            sm:left-[43px]

            md:left-[45px]

            whitespace-nowrap

            bg-gradient-to-r
            from-[#003F79]
            to-[#00ACDB]

            bg-clip-text
            text-transparent

            font-semibold
            font-alkatra

            text-[11px]

            sm:text-[12px]
            md:text-[14px]
          "
        >
          Just Real State Investments...No Bull
        </p>

        {/* Triangle */}
        <div
          className="
            absolute

            left-[250px]
            top-[18px]

            w-[39px]
            h-[45px]

            sm:left-[210px]
            sm:top-[25px]

            md:left-[303px]

            bg-white
            rotate-[170deg]
          "
          style={{
            clipPath: "polygon(0 0, 100% 100%, 0 100%)",
          }}
        />
      </div>

      {/* ================= HEADING ================= */}
      <div
        className="
          absolute
          z-10

          top-[175px]
          left-[5%]

          w-[90%]

          sm:top-[175px]
          sm:left-[5%]
          sm:w-[65%]

          md:top-[185px]
          md:left-[5%]
          md:w-[65%]

          lg:top-[30%]
          lg:left-[5%]
          lg:w-auto
        "
      >
        <h1
          className="
            font-bold
            text-white

            text-[32px]
            leading-[40px]

            sm:text-[24px]
            sm:leading-[47px]

            md:text-[44px]
            md:leading-[54px]

            lg:text-[50px]
            lg:leading-[64px]

            text-shadow-[3px_4px_5px_rgba(0,0,0,0.6)]
          "
        >
          Enter The Address.We'll show
          <br />
          you what it's actually worth
        </h1>
      </div>

      {/* ================= SEARCH ================= */}
      <div
        className="
          absolute
          z-20

          top-[340px]
          left-[5%]

          w-[90%]
          h-[52px]

          sm:top-[269px]
          sm:left-[5%]
          sm:w-[52%]
          sm:h-[54px]

          md:top-[365px]
          md:left-[5%]
          md:w-[72%]
          md:h-[55px]

          lg:top-[330px]
          lg:left-[70px]
          lg:w-[680px]
          lg:h-[55px]

          bg-white
          rounded-[10px]
        "
      >
        {/* Search Icon */}
        <img
          src={Search}
          alt="Search"
          className="
            absolute

            left-[15px]
            top-[14px]

            w-[23px]
            h-[23px]
          "
        />

        {/* Placeholder */}
        <p
          className="
            absolute

            left-[48px]
            top-[15px]

            text-[#9593A2]

            text-[13px]

            sm:text-[14px]
            md:text-[15px]
          "
        >
          Search Property...
        </p>

        {/* Search Button */}
        <Button
          className="
            absolute

            right-[5px]
            top-[4px]

            w-[110px]
            h-[44px]

            sm:w-[125px]
            sm:h-[46px]

            md:w-[140px]

            lg:w-[163px]
            lg:h-[45px]

            bg-gradient-to-r
            from-[#003F79]
            to-[#00ACDB]

            rounded-[8px]
            text-white

            text-[14px]
            sm:text-[15px]
            md:text-[16px]
          "
        >
          Search
        </Button>

        {/* Download Text */}
        <p
          className="
            absolute

            left-[2px]
            top-[68px]

            whitespace-nowrap

            font-semibold

            text-[18px]
            leading-[25px]

            sm:text-[16px]
            sm:leading-[28px]

            md:text-[24px]
            md:leading-[30px]

            lg:text-[28px]
            lg:leading-[100%]

            text-white

            drop-shadow-[0_4px_6px_rgba(0,0,0,0.33)]

            [-webkit-text-stroke:1px_rgba(0,0,0,1)]
          "
        >
          Download it.Use it.Pay when it makes sense.
        </p>
      </div>

      {/* ================= APP BUTTONS ================= */}
      <div
        className="
          absolute
          z-20

          left-[5%]
          top-[470px]

          w-[280px]
          h-[52px]

          sm:left-[5%]
          sm:top-[368px]
          sm:w-[300px]
          sm:h-[54px]

          md:left-[5%]
          md:top-[500px]
          md:w-[315px]
          md:h-[56px]

          lg:left-[73px]
          lg:top-[460px]
          lg:w-[322px]
          lg:h-[58px]

          bg-white
          rounded-[13px]
        "
      >
        <img
          src={Group}
          alt="Group"
          className="
            absolute

            top-[4px]
            left-[3px]

            w-[274px]
            h-[44px]

            sm:w-[292px]
            sm:h-[46px]

            md:w-[307px]
            md:h-[48px]

            lg:w-[314px]
            lg:h-[49px]
          "
        />
      </div>
    </section>
  );
}

export default MainSection;