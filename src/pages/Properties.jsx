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
      tag: "WHOLESALE",
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
      tag: "WHOLESALE",
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
      tag: "WHOLESALE",
      title: "Elegant Modern House",
      beds: "04",
      baths: "03",
      sqft: "2,750 sqft",
      address: "89 Riverside Drive, Manhattan, NY 10024, USA",
      price: "55,000",
    },
  ];

  return (
    <section className="w-full bg-[#F3F6F9] px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 flex items-center justify-center gap-2 text-[26px] font-semibold sm:text-[32px]">
          <span className="text-[#575665]">New</span>
          <span className="bg-gradient-to-r from-[#003F79] to-[#00ACDB] bg-clip-text text-transparent">
            Properties
          </span>
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {propertiesData.map((item) => (
            <div
              key={item.id}
              className="flex w-full flex-col overflow-hidden rounded-[10px] bg-white shadow-lg"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(200,48,235,0.25) 0%, rgba(0,172,219,0.26) 50%, rgba(0,172,219,0) 100%)",
                  }}
                />
              </div>

              <div className="flex flex-1 flex-col p-4">
                <span className="bg-gradient-to-r from-[#C830EB] to-[#00ACDB] bg-clip-text text-[15px] font-bold tracking-wider text-transparent">
                  {item.tag}
                </span>
                <h3 className="mt-1 text-lg font-bold text-[#575665]">
                  {item.title}
                </h3>

                <div className="my-2 flex items-center gap-4 text-xs text-[#6B747B]">
                  <div className="flex items-center gap-1">
                    <img src={Bed} alt="beds" />
                    <span>{item.beds}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={Icon} alt="baths" />
                    <span>{item.baths}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={TableBed} alt="sqft" />
                    <span>{item.sqft}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 truncate text-xs text-[#6B747B]">
                  <img src={Map} alt="map" />
                  {item.address}
                </div>

                <div className="mt-4 flex items-center justify-between gap-2">
                  <Button className="h-[40px] w-[140px] rounded-[8px] bg-gradient-to-r from-[#003F79] to-[#00ACDB] text-white">
                    View Details
                  </Button>
                  <span className="flex items-center gap-1 font-semibold text-[#575665]">
                    <img src={Dollar} alt="price" className="h-4 w-4" />
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button className="h-[50px] w-[150px] rounded-[8px] bg-[#CCF1F7] text-[#00ACDB]">
            See More
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Properties;
