"use client";

const values = [
  {
    number: "01.",
    title: "Innovation",
    text:
      "At Zoom Tours, we actively pursue new travel solutions, with new efficient and effective technologies that improve and enhance the client experience, and we continuously learn.",
  },
  {
    number: "02.",
    title: "Diligence",
    text:
      "We seek out high value client travel solutions, using our new service delivery concepts and innovations, and we “never say never!”",
  },
  {
    number: "03.",
    title: "Timeliness",
    text:
      "We seek to exceed our clients expectations with our fast response without compromising the quality of our service.",
  },
  {
    number: "04.",
    title: "Ethical",
    text:
      "We always hold our clients wellbeing high with equal treatment, providing value for money, and conducting our business activities with the utmost trust and honesty.",
  },
  {
    number: "05.",
    title: "Respect",
    text:
      "We are accepting of others, and open to diversity both within and outside Zoom Tours.",
  },
  {
    number: "06.",
    title: "Quality",
    text:
      "We provide services that clients and co-workers value and will tell others.",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-semibold text-gray-900">
            What Makes Us Different?
          </h2>
      
          <p className="mt-4 text-xs leading-6 text-gray-600">
            Our tours can be adapted to meet the specific needs, ages and size
            of any group. Our professional tour guides deliver tours year–round
            for groups visiting from all over the world. They are interesting,
            reliable and filled with information about the city “beyond the
            tour”. Zoom Tours takes pride in delivering high-quality services
            like Niagara falls tours Canada, Niagara Falls Boat Tours, Multi
            city tours including Vancouver, Montreal, Ottawa and many others by
            showcasing the city’s landmarks, and presenting the history,
            culture and tradition that make our service unique.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="text-sm font-semibold text-red-500">
                {value.number}
              </div>
              <div className="mt-2 text-sm font-semibold text-gray-900">
                {value.title}
              </div>
              <p className="mt-2 text-xs leading-6 text-gray-600">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
