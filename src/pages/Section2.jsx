import Section2Image from "../assets/GroupSection2.png";
import Button from "../Component/Button";

function Section2() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 bg-[rgba(243,246,249,1)] px-4 py-16 sm:gap-[30px] sm:py-20">
      <p className="text-center text-sm font-semibold leading-[100%] tracking-[0] text-transparent sm:text-[16px] bg-gradient-to-l from-[#00ACDB] to-[#C830EB] bg-clip-text">
        GET NATIONAL EXPOUSER TO REAL ESTATE INVESTORS
      </p>
      <img
        src={Section2Image}
        alt="Section2"
        className="h-auto w-full max-w-[700px]"
      />
      <Button className="h-[49px] w-[150px] rounded-[8px] bg-gradient-to-r from-[#003F79] to-[#00ACDB] text-white">
        Click Here
      </Button>
    </div>
  );
}

export default Section2;
