import { useState } from "react";
import logo from "../assets/logo.png";
import Button from "./Button";

function NabBar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "7 Day Trial", "Submit Property"];

  return (
    <nav className="w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-[70px] max-w-[1400px] items-center justify-between px-4 sm:h-[90px] sm:px-6 lg:px-10">
        <img src={logo} alt="Logo" className="h-[50px] w-auto sm:h-[70px]" />

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 text-[16px] lg:flex">
          <li className="cursor-pointer font-bold text-[#575665] hover:text-[#00ACDB]">
            Home
          </li>
          <li className="cursor-pointer text-[#6B7280] hover:text-[#00ACDB]">
            7 Day Trial
          </li>
          <li className="cursor-pointer text-[#6B7280] hover:text-[#00ACDB]">
            Submit Property
          </li>
        </ul>

        {/* Desktop buttons */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button className="h-[49px] w-[150px] rounded-[8.07px] bg-[#CCF1F7] font-bold text-[#00ACDB]">
            Book a Demo
          </Button>
          <Button className="h-[49px] w-[110px] rounded-[8.07px] bg-gradient-to-r from-[#003F79] to-[#00ACDB] font-bold text-white">
            Sign Up
          </Button>
          <Button className="h-[49px] w-[110px] rounded-[8.07px] bg-gradient-to-r from-[#003F79] to-[#00ACDB] font-bold text-white">
            Log In
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-[#003F79] transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-[#003F79] transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-[#003F79] transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-4 border-t border-gray-100 bg-white px-6 py-6 lg:hidden">
          <ul className="flex flex-col gap-4 text-[16px]">
            {links.map((link) => (
              <li key={link} className="cursor-pointer text-[#6B7280]">
                {link}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
            <Button className="h-[49px] w-full rounded-[8.07px] bg-[#CCF1F7] font-bold text-[#00ACDB]">
              Book a Demo
            </Button>
            <div className="flex gap-3">
              <Button className="h-[49px] flex-1 rounded-[8.07px] bg-gradient-to-r from-[#003F79] to-[#00ACDB] font-bold text-white">
                Sign Up
              </Button>
              <Button className="h-[49px] flex-1 rounded-[8.07px] bg-gradient-to-r from-[#003F79] to-[#00ACDB] font-bold text-white">
                Log In
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NabBar;
