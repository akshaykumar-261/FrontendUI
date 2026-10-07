import React from "react";
import FotterImg from "../assets/FooterImg.png";
import AppStone from "../assets/AppStone.png"
import Play from "../assets/play.png"
import FotterIcon from "../assets/FooterIcon.svg"
import FaceBook from "../assets/FotterFaceBook.png"
import Linkdin from "../assets/LinkdinFooter.png"
import Instagram from "../assets/InstagramFooter.png"
import youTube from "../assets/YouTubeFoteer.png"
import Video from "../assets/VideoFooter.png"

function Footer() {
  return (
    <div className="h-[800px] w-full relative">
      <div
        className="relative h-[400px] bg-red-600 bg-cover bg-center"
        style={{
          backgroundImage: `url(${FotterImg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#001014]/20 to-[#003F79]/80"></div>
        <div className="absolute inset-0  flex flex-col items-center justify-center gap-5">
          <p className="text-[35px] font-bold text-white">
            Available Now on AppStore & GooglePlay
          </p>
          <p className="font-semibold text-white text-[15px]">
            WebApp Package Coming Spring 2025!
          </p>
          <div className="flex gap-4">
            <img
              src={AppStone}
              alt="AppStone Icon"
              className=" object-cover rounded-[10px]"
            />
            <img
              src={Play}
              alt="Play Icon"
              className=" object-cover rounded-[10px]"
            />
          </div>
        </div>
      </div>

      {/* kjhjkhjkkkkkkkkkkkkk */}
      <div className="bg-[#002241] text-white h-[400px] w-full px-12 py-10 flex flex-col justify-between">
        {/* Top Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img
                src={FotterIcon}
                alt="FotterIcon"
                className=" object-cover rounded-[10px]"
              />
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              FlippBidd is the ultimate real estate
            </p>
            <p className="text-xs text-gray-300 leading-relaxed">
              investment platform, providing
            </p>
            <p className="text-xs text-gray-300 leading-relaxed ">
              nationwide off-market leads,
            </p>
            <p className="text-xs text-gray-300 leading-relaxed">
              financial services, and data-driven
            </p>
            <p className="text-xs text-gray-300 leading-relaxed ">
              insights to empower investors.
            </p>
            <div className="flex gap-3 mt-1">
              {/* Social Icons Placeholders */}
              <div className="w-8 h-8 rounded-full bg-[#003F79] flex items-center justify-center cursor-pointer hover:opacity-80">
                <img
                  src={FaceBook}
                  alt="Play Icon"
                  className=" object-cover rounded-[10px]"
                />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#003F79] flex items-center justify-center cursor-pointer hover:opacity-80">
                <img
                  src={Linkdin}
                  alt="Play Icon"
                  className=" object-cover rounded-[10px]"
                />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#003F79] flex items-center justify-center cursor-pointer hover:opacity-80">
                <img
                  src={Instagram}
                  alt="Instagram Icon"
                  className=" object-cover rounded-[10px]"
                />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#003F79] flex items-center justify-center cursor-pointer hover:opacity-80">
                <img
                  src={youTube}
                  alt="youTube Icon"
                  className=" object-cover rounded-[10px]"
                />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#003F79] flex items-center justify-center cursor-pointer hover:opacity-80">
                <img
                  src={Video}
                  alt="Video Icon"
                  className=" object-cover rounded-[10px]"
                />
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm text-[#00b4d8] mb-1">
              Quick Links
            </h3>
            <a href="#" className="text-xs text-gray-300 hover:text-white">
              Home
            </a>
            <a href="#" className="text-xs text-gray-300 hover:text-white">
              7 Day Trial
            </a>
            <a href="#" className="text-xs text-gray-300 hover:text-white">
              Book a Demo
            </a>
            <a href="#" className="text-xs text-gray-300 hover:text-white">
              Submit Property
            </a>
          </div>

          {/* Column 3: Get in Touch */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm text-[#00b4d8] mb-1">
              Get in Touch
            </h3>
            <p className="text-xs text-gray-300 flex items-center gap-2">
              📍 New York, NY
            </p>
            <p className="text-xs text-gray-300 flex items-center gap-2 truncate">
              📅 calendly.com/flippbidd...
            </p>
            <p className="text-xs text-gray-300 flex items-center gap-2">
              📞 +1 376-688-3298
            </p>
          </div>

          {/* Column 4: Newsletter & Apps */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-sm text-[#00b4d8]">
              Get our Weekly Email Updates
            </h3>
            <span className="text-[11px] text-gray-400">Your Email</span>
            <div className="flex bg-white rounded-lg overflow-hidden p-1 max-w-[280px]">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full text-xs px-2 text-black outline-none bg-transparent"
              />
              <button className="bg-[#0077b6] text-white text-xs px-4 py-2 rounded-md font-medium hover:bg-[#005f87] transition-colors">
                Send
              </button>
            </div>
            <div className="flex gap-2 mt-1">
              <div className="bg-black border border-gray-700 px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer">
                <span className="text-[10px] leading-tight">
                  Download on the
                  <br />
                  <strong className="text-xs">App Store</strong>
                </span>
              </div>
              <div className="bg-black border border-gray-700 px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer">
                <span className="text-[10px] leading-tight">
                  GET IT ON
                  <br />
                  <strong className="text-xs">Google Play</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Section */}
        <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-400">
          <p>© Copyright 2025 FlippBidd App</p>
          <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white">
              Privacy policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white">
              Cancellation & Refund Policy
            </a>
          </div>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">
              Contact Sales
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
