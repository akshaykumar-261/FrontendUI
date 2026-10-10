import PlayButton from "../assets/Play.svg";
import House1 from "../assets/CommHouse1.png";
import House2 from "../assets/CommHouse2.png";
import House3 from "../assets/CommHouse3.png";
import House4 from "../assets/CommHouse4.png";

function FlibbdCommunity() {
  const cardsData = [
    { id: 1, image: House1, title: "Real Estate Wholesaling and Networking" },
    { id: 2, image: House2, title: "FlippBidd NYC NYREM Event Dec 2023" },
    { id: 3, image: House3, title: "Real Estate Wholesaling and Networking" },
    { id: 4, image: House4, title: "Real Estate Wholesaling and Networking" },
  ];

  return (
    <section className="w-full px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        {/* Heading */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-[24px] font-bold sm:text-[35px]">
          <span className="text-[#575665]">See what our</span>
          <span className="bg-gradient-to-r from-[#003F79] to-[#00ACDB] bg-clip-text text-transparent">
            FlippBidd
          </span>
          <span className="text-[#575665]">Community is Saying</span>
        </div>
        <p className="mt-3 text-center text-[16px] font-semibold text-transparent sm:text-[18px] bg-gradient-to-r from-[#C830EB] to-[#00ACDB] bg-clip-text">
          VIEW VIDEOS BELOW
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 justify-items-center gap-9 sm:grid-cols-2 lg:grid-cols-4">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="w-full max-w-[250px] overflow-hidden rounded-[10px] bg-white shadow-lg"
            >
              <div className="relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-[180px] w-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(0, 63, 121,0.60) 0%, rgba(0, 172, 219, 0) 100%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-[55px] w-[55px] items-center justify-center rounded-[50%] bg-white shadow-lg">
                    <img src={PlayButton} alt="Play" className="h-[25px] w-[25px] object-cover" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-[15px] font-semibold text-[#575665]">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FlibbdCommunity;
