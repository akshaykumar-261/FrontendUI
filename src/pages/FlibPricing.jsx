import TickIcon from "../assets/TickIcon.svg";
import Button from "../Component/Button";

function FlibPricing() {
  const pricingPlans = [
    {
      id: 1,
      title: "Free Version",
      price: "$0.00",
      period: "/ Month",
      badge: null,
      features: [
        "Includes 7 Day Full Access",
        "Deal Notifications",
        "CRM+Networks Feature",
        "Basic Property Data",
      ],
      buttonText: "Get Started",
    },
    {
      id: 2,
      title: "WebApp Package",
      price: "$199.00",
      period: "/ Month",
      badge: "GET A 7-DAY TRIAL",
      features: [
        "WebApp + Mobile Device Access",
        "100 Property Reports",
        "FlippBidd Leads",
        "National Investor Search",
        "100 SkipTraces/Month",
      ],
      buttonText: "Subscribe",
    },
    {
      id: 3,
      title: "Pro-Plus+ Coming Soon",
      price: "$299.00",
      period: "/ Month",
      badge: null,
      features: [
        "WebApp Package",
        "Virtual Tours w/ RSVP Reminders",
        "500 Property Reports",
        "200 SkipTraces/Month",
      ],
      buttonText: "Subscribe",
    },
  ];

  return (
    <section
      className="w-full px-4 py-16 sm:px-6 lg:px-10"
      style={{
        background:
          "linear-gradient(90deg, rgba(200,48,235,0.3) 0%, rgba(0,172,219,0.2592) 0%, rgba(0,172,219,0) 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 flex flex-wrap items-center justify-center gap-2 text-center text-[26px] font-semibold sm:text-[32px]">
          <span className="bg-gradient-to-r from-[#003F79] to-[#00ACDB] bg-clip-text text-transparent">
            FlippBidd
          </span>
          <span className="text-[#575665]">Pricing &amp; Plans</span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="relative flex w-full max-w-[340px] flex-col overflow-hidden rounded-2xl bg-white shadow-md"
            >
              {plan.badge && (
                <div className="flex items-center justify-center bg-gradient-to-r from-[#AF16CD] to-[#00ACDB] py-2 text-sm font-semibold text-white md:hidden">
                  {plan.badge}
                </div>
              )}
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="bg-gradient-to-r from-[#003F79] to-[#00ACDB] bg-clip-text text-3xl font-extrabold text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-xs font-semibold text-[#00ACDB]">
                      {plan.period}
                    </span>
                  </div>
                  <h3 className="mt-1 text-lg font-bold text-[#2B3842]">
                    {plan.title}
                  </h3>
                </div>
                <hr className="mb-6 border-gray-100" />
                <ul className="mb-8 flex-1 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-sm text-[#2B3842]"
                    >
                      <img src={TickIcon} alt="TickIcon Img" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full rounded-lg bg-gradient-to-r from-[#003F79] to-[#00ACDB] py-3 text-sm font-semibold text-white">
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FlibPricing;
