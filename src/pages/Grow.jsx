import BgImage from "../assets/BgImage.png";
import Tick from "../assets/whiteTick.svg";
import TickTokImg from "../assets/TickTok.svg";
import FacebookIcon from "../assets/facebook.png";
import MessagnerIcon from "../assets/Messanger.png";
import InstagramIcon from "../assets/Instagram.png";
import WhatsppIcon from "../assets/whatsapp.png";
import TwitterIcon from "../assets/Twitter.png";

function Grow() {
  const socials = [
    { icon: TickTokImg, bg: "bg-black" },
    { icon: FacebookIcon, bg: "bg-[#3B579D]" },
    { icon: MessagnerIcon, bg: "bg-white" },
    { icon: InstagramIcon, bg: "bg-white" },
    { icon: WhatsppIcon, bg: "bg-white" },
    { icon: TwitterIcon, bg: "bg-black" },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-[#00ACDB] via-[#A6F0F7] to-[#FDE3FA] px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px] rounded-[10px] bg-white">
        <div
          className="rounded-[10px] bg-cover bg-center bg-no-repeat p-6 sm:p-10"
          style={{ backgroundImage: `url(${BgImage})` }}
        >
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:gap-6">
            {/* Left content */}
            <div className="w-full max-w-[700px] text-center lg:text-left">
              <p className="text-[32px] font-bold leading-tight text-white sm:text-[45px]">
                Let's Grow our
              </p>
              <p className="text-[32px] font-bold leading-tight text-white sm:text-[45px]">
                Community Together
              </p>
              <p
                className="mt-4 text-[16px] font-semibold sm:text-[18px]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0, 172, 219, 1) 0%, rgba(166, 240, 247, 1) 50%, rgba(253, 227, 250, 1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))",
                }}
              >
                Inquire about our Affiliate Program Today.
              </p>

              <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
                <div className="flex h-[50px] w-full max-w-[250px] items-center justify-center rounded-[10px] bg-white">
                  <p className="bg-gradient-to-r from-[#003F79] to-[#00ACDB] bg-clip-text font-semibold text-transparent">
                    Become a FlippBidd Affiliate
                  </p>
                </div>
                <div className="flex h-[50px] w-full max-w-[290px] items-center justify-center gap-2 rounded-[10px] border border-white bg-transparent px-4">
                  <img src={Tick} alt="Tick Icon" className="rounded-[10px] object-cover" />
                  <p className="text-[13px] font-semibold text-white sm:text-[16px]">
                    LetsNetwork@flippbidd.com
                  </p>
                </div>
              </div>
            </div>

            {/* Right social icons */}
            <div className="grid grid-cols-3 gap-5">
              {socials.map((social, index) => (
                <div
                  key={index}
                  className={`flex h-[70px] w-[70px] items-center justify-center rounded-[50%] ${social.bg}`}
                >
                  <img
                    src={social.icon}
                    alt="Social Icon"
                    className="w-[50px] rounded-[10px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Grow;
