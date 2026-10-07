import React from "react";
import PlayButton from "../assets/Play.svg"
import House1 from "../assets/CommHouse1.png"
import House2 from "../assets/CommHouse2.png";
import House3 from "../assets/CommHouse3.png";
import House4 from "../assets/CommHouse4.png";

function FlibbdCommunity() {
  const cardsData = [
    {
      id: 1,
      image:
       House1,
      title: "Real Estate Wholesaling and Networking",
    },
    {
      id: 2,
      image:
        House2,
      title: "FlippBidd NYC NYREM Event Dec 2023",
    },
    {
      id: 3,
      image:
        House3,
      title: "Real Estate Wholesaling and Networking",
    },
    {
      id: 4,
      image:
       House4,
      title: "Real Estate Wholesaling and Networking",
    },
  ];
  return (
    <div className="relative h-[600px] w-full flex items-center justify-center">
      <div className="h-[400px] w-[300px] w-[1300px] relative">
        <div className=" flex justify-center gap-3">
          <span className="text-[35px]  font-bold text-[#575665]">
            See what our
          </span>
          <span className="text-[35px]  font-bold  bg-gradient-to-r from-[#003F79] to-[#00ACDB] bg-clip-text text-transparent">
            FlippBidd
          </span>
          <span className="text-[35px]  font-bold text-[#575665]">
            Community is Saying
          </span>
        </div>
        <p className="absolute left-[550px] text-[18px] mt-2 bg-gradient-to-r from-[#C830EB] to-[#00ACDB] bg-clip-text text-transparent font-semibold">
          VIEW VIDEOS BELOW
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 absolute top-[230px]">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-[10px] w-[250px] h-[290px] shadow-lg overflow-hidden"
          >
            {/* Card Image with Play Button */}
            <div className="relative">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 "
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0, 63, 121,0.60) 0%, rgba(0, 172, 219, 0) 100%)",
                }}
              ></div>
            </div>

            <div className="rounded-[50%] h-[55px] w-[55px] absolute top-[140px] ml-5 bg-white shadow-lg flex items-center justify-center">
              <img
                src={PlayButton}
                className="w-[25px] h-[25px] object-cover"
              />
            </div>

            <div className="relative">
              <h3 className="text-[#575665] font-semibold text-[15px] absolute top-[40px] left-[11px]">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlibbdCommunity;
