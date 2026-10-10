import FotterImg from "../assets/FooterImg.png";
import AppStone from "../assets/AppStone.png";
import Play from "../assets/play.png";
import FotterIcon from "../assets/FooterIcon.svg";
import FaceBook from "../assets/FotterFaceBook.png";
import Linkdin from "../assets/LinkdinFooter.png";
import Instagram from "../assets/InstagramFooter.png";
import youTube from "../assets/YouTubeFoteer.png";
import Video from "../assets/VideoFooter.png";
import Calender from "../assets/Calender.png";
import MobileImg from "../assets/MobileIcon.png";
import MapImg from "../assets/MapIcon.png";
import AppFotter from "../assets/AppStoreFooter.svg";
import GoogleFotter from "../assets/GoggleplayFooter.png";
import Button from "../Component/Button";
import BuildingImg from "../assets/Building.png";

function Footer() {
  const socials = [FaceBook, Linkdin, Instagram, youTube, Video];

  return (
    <footer className="relative w-full">
      {/* Top banner */}
      <div
        className="relative bg-cover bg-center px-4 py-16 sm:px-6"
        style={{ backgroundImage: `url(${FotterImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#001014]/20 to-[#003F79]/80" />
        <div className="relative z-10 flex flex-col items-center justify-center gap-5 text-center">
          <p className="text-[24px] font-bold text-white sm:text-[35px]">
            Available Now on AppStore &amp; GooglePlay
          </p>
          <p className="text-[14px] font-semibold text-white sm:text-[15px]">
            WebApp Package Coming Spring 2025!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <img src={AppStone} alt="AppStone Icon" className="rounded-[10px] object-cover" />
            <img src={Play} alt="Play Icon" className="rounded-[10px] object-cover" />
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative overflow-hidden bg-[#002241] text-white">
        <img
          src={BuildingImg}
          alt="BuildingImg"
          className="pointer-events-none absolute right-0 top-0 hidden h-full opacity-30 lg:block"
        />
        <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col gap-12 px-4 py-10 sm:px-6 lg:px-10">
          {/* Top Content */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <img src={FotterIcon} alt="FotterIcon" className="w-fit rounded-[10px] object-cover" />
              <p className="text-[14px] leading-relaxed text-gray-300">
                FlippBidd is the ultimate real estate investment platform,
                providing nationwide off-market leads, financial services, and
                data-driven insights to empower investors.
              </p>
              <div className="mt-1 flex gap-3">
                {socials.map((icon, index) => (
                  <div
                    key={index}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#003F79] hover:opacity-80"
                  >
                    <img src={icon} alt="Social Icon" className="rounded-[10px] object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3">
              <h3 className="mb-1 text-sm font-semibold text-[#00b4d8]">Quick Links</h3>
              <a href="#" className="text-[14px] text-gray-300">Home</a>
              <a href="#" className="text-[14px] text-gray-300">7 Day Trial</a>
              <a href="#" className="text-[14px] text-gray-300">Book a Demo</a>
              <a href="#" className="text-[14px] text-gray-300">Submit Property</a>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <h3 className="mb-1 text-sm font-semibold text-[#00b4d8]">Get in Touch</h3>
              <p className="flex items-center gap-3 text-[14px] text-gray-300">
                <img src={MapImg} alt="MapImg Icon" className="rounded-[10px] object-cover" />
                New York, NY
              </p>
              <div className="flex items-start gap-3 text-[14px] text-gray-300">
                <img src={Calender} alt="Calender Icon" className="mt-1 rounded-[10px] object-cover" />
                <span className="break-all">
                  https://calendly.com/flippbidd/flippbidd-network-intro-demo
                </span>
              </div>
              <p className="flex items-center gap-3 text-[14px] text-gray-300">
                <img src={MobileImg} alt="MobileImg Icon" className="rounded-[10px] object-cover" />
                +1 376-688-3298
              </p>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-[#00b4d8]">
                Get our Weekly Email Updates
              </h3>
              <span className="text-[14px] text-gray-400">Your Email</span>
              <div className="flex max-w-[300px] overflow-hidden rounded-lg bg-white p-1">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full bg-transparent px-2 text-xs text-black outline-none"
                />
                <Button className="rounded-md bg-gradient-to-r from-[#003F79] to-[#00ACDB] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#005f87]">
                  Send
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <img src={AppFotter} alt="AppFotter Icon" className="h-[40px] rounded-[10px] object-cover" />
                <img src={GoogleFotter} alt="GoogleFotter Icon" className="h-[40px] shrink-0 rounded-[10px] object-cover" />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-[12px] text-gray-400 md:flex-row">
            <p>© Copyright 2025 FlippBidd App</p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span>|</span>
              <a href="#">Terms &amp; Conditions</a>
              <span>|</span>
              <a href="#">Privacy policy</a>
              <span>|</span>
              <a href="#">Cancellation &amp; Refund Policy</a>
            </div>
            <div className="flex items-center gap-2">
              <a href="#">Contact Sales</a>
              <span>|</span>
              <a href="#">Contact Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
