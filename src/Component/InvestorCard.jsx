import Elips from "../assets/Ellipse 187.svg";
import Tick from "../assets/gridTick.svg";
function InvestorCard({ name, role, image, positionClass }) {
  return (
    <div
      className={`absolute bg-white backdrop-blur-md p-4 rounded-2xl shadow-2xl flex flex-col items-center w-[120px] h-[147px] ${positionClass}`}
    >
      {/* Profile Image with Gradient Border */}
      <div className="relative w-14 h-14 rounded-full p-[2px] bg-gradient-to-r from-[#AF16CD] to-[#00ACDB] mb-2">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
        {/* Verified Tick Badge */}
      </div>
      <div className="relative absolute top-[-20px] ">
        <img src={Elips} className="w-[20px] h-[20px] object-cover" />
        <img
          src={Tick}
          className="w-[10px] h-[10px]object-cover rounded-full absolute top-[7px] left-[5px]"
        />
      </div>
      {/* Name and Role */}
      <h4 className="text-sm font-bold bg-gradient-to-r from-[#AF16CD] to-[#00ACDB] bg-clip-text text-transparent absolute top-[80px]">
        {name}
      </h4>
      <span className="text-xs text-gray-400 font-medium">{role}</span>
    </div>
  );
}

export default InvestorCard;
