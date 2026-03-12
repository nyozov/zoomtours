const tours = [
  {
    title: "Niagara Falls Evening Tour + Boat Cruise",
    price: "169",
    image:
      "https://www.zoomtours.com/wp-content/uploads/2020/03/wmd-bg-1-768x451.jpeg",
    location: "Niagara Falls, ON",
    dates: "Apr 6–8",
    rating: "4.92",
  },
  {
    title: "Deluxe Niagara Falls Day Tour with Cruise",
    price: "149",
    image:
      "https://www.zoomtours.com/wp-content/uploads/2020/03/1-768x451.jpeg",
    location: "Niagara Falls, ON",
    dates: "Apr 10–12",
    rating: "4.88",
  },
  {
    title: "Evening Tour with Cruise & Dinner",
    price: "219",
    image:
      "https://www.zoomtours.com/wp-content/uploads/2020/03/dinner-tour-niagara-falls-1.jpg",
    location: "Niagara Falls, ON",
    dates: "Apr 13–15",
    rating: "4.95",
  },
  {
    title: "Tour with Cruise & Fallsview Lunch",
    price: "189",
    image:
      "https://www.zoomtours.com/wp-content/uploads/2020/03/fallsview-lunch-1.jpg",
    location: "Niagara Falls, ON",
    dates: "Apr 18–20",
    rating: "4.86",
  },
  {
    title: "Freedom Day Tour – No Boat Cruise",
    price: "119",
    image:
      "https://www.zoomtours.com/wp-content/uploads/2024/09/helicopter-ride-niagara-falls.jpg",
    location: "Niagara Falls, ON",
    dates: "Apr 22–24",
    rating: "4.81",
  },
  {
    title: "Falls + Winery Stops Day Trip",
    price: "159",
    image:
      "https://www.zoomtours.com/wp-content/uploads/2020/03/niagara-falls-1.jpg",
    location: "Niagara-on-the-Lake, ON",
    dates: "Apr 26–28",
    rating: "4.89",
  },
];

export default function TourCards() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-xl font-semibold text-gray-900">Tours </h3>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 mt-4">
          {tours.map((tour) => (
            <a key={tour.title} href="#" className="group flex flex-col gap-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="text-xs font-semibold text-gray-900">
                    {tour.location}
                  </div>
                  <div className="text-xs text-gray-600">{tour.title}</div>
                  <div className="text-xs text-gray-500">{tour.dates}</div>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-900">
                  <span className="text-[10px]">★</span>
                  <span>{tour.rating}</span>
                </div>
              </div>

              <div className="text-xs text-gray-900">
                <span className="font-semibold">${tour.price}</span>{" "}
                <span className="text-gray-600">per person</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
