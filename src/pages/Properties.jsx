import React from "react";
import House1 from "../assets/House1.png";
import House2 from "../assets/House2.png";
import House3 from "../assets/House3.png";
import House4 from "../assets/House4.png";
import House5 from "../assets/House5.png";
import House6 from "../assets/House6.png";
import Button from "../Component/Button";
import Dollar from "../assets/Dollar.png";
import Bed from "../assets/tabler_bed-filled.png";
import Icon from "../assets/iconoir_bathroom-solid.svg";
import TableBed from "../assets/tabler_bed-filled.svg";
import Map from "../assets/ri_map-pin-fill.svg";
function Properties() {
  const propertiesData = [
    {
      id: 1,
      image: House1,
      tag: "WHOLESALE",
      title: "Modern Family Home",
      beds: "03",
      baths: "02",
      sqft: "1,850 sqft",
      address: "125 Park Avenue, New York, NY 10017, USA",
      price: "35,000",
    },
    {
      id: 2,
      image: House2,
      tag: "FOR SALE",
      title: "Luxury Family House",
      beds: "04",
      baths: "03",
      sqft: "2,400 sqft",
      address: "78 Maple Street, Brooklyn, NY 11201, USA",
      price: "48,500",
    },
    {
      id: 3,
      image: House3,
      tag: "WHOLESALE",
      title: "Spacious Townhouse",
      beds: "03",
      baths: "02",
      sqft: "1,950 sqft",
      address: "214 Madison Avenue, New York, NY 10016, USA",
      price: "42,000",
    },
    {
      id: 4,
      image: House4,
      tag: "FEATURED",
      title: "Contemporary Villa",
      beds: "05",
      baths: "04",
      sqft: "3,200 sqft",
      address: "56 Ocean Drive, Queens, NY 11375, USA",
      price: "65,000",
    },
    {
      id: 5,
      image: House5,
      tag: "WHOLESALE",
      title: "Cozy Suburban Home",
      beds: "02",
      baths: "02",
      sqft: "1,500 sqft",
      address: "342 Elm Street, Bronx, NY 10458, USA",
      price: "29,500",
    },
    {
      id: 6,
      image: House6,
      tag: "FOR SALE",
      title: "Elegant Modern House",
      beds: "04",
      baths: "03",
      sqft: "2,750 sqft",
      address: "89 Riverside Drive, Manhattan, NY 10024, USA",
      price: "55,000",
    },
  ];

  return (
    <div className="relative bg-[#F3F6F9] top-[450px] min-h-[1100px] py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="flex items-center justify-center gap-2 text-[32px] font-semibold mb-12">
          <span className="text-[#575665]">New</span>
          <span className="bg-gradient-to-r from-[#003F79] to-[#00ACDB] bg-clip-text text-transparent">
            Properties
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {propertiesData.map((item) => (
            <div
              key={item.id}
              className="bg-white h-[400px] w-full rounded-[10px] shadow-lg  p-2 flex flex-col justify-between "
            >
              <div className="relative">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-[10px]"
                  />

                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(200,48,235,0.20) 0%, rgba(0,172,219,0.2592) 0%, rgba(0,172,219,0) 100%)",
                    }}
                  ></div>
                </div>
                <div className="absolute left-[12px] top-[210px]">
                  <span className="text-[15px] font-bold tracking-wider bg-gradient-to-r from-[#C830EB] to-[#00ACDB] bg-clip-text text-transparent">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-bold text-[#575665] mt-1">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-[#6B747B] my-2">
                    <div className="flex items-center gap-1">
                      <img src={Bed} />
                      <span> {item.beds}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src={Icon} />
                      <span> {item.baths}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src={TableBed} />
                      <span> {item.sqft}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#6B747B] truncate">
                    <img src={Map} />
                    {item.address}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between relative">
                <Button className="absolute top-[-50px] left-[12px] h-[40px] w-[150px] rounded-[8px] bg-gradient-to-r from-[#003F79] to-[#00ACDB] text-white">
                  View Details
                </Button>
                <span className="text-[#575665] font-semibold absolute top-[-40px] left-[260px]">
                  <img src={Dollar} className="absolute left-[-25px]" />
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button className="absolute top-[1020px] left-[570px] h-[50px] w-[150px] rounded-[8px] bg-[#CCF1F7] text-[#00ACDB] ">
        See More
      </Button>
    </div>
  );
}

export default Properties;
