import LandingVideo from "./components/LandingVideo";
import Reviews from "./components/Reviews";
import TourCards from "./components/TourCards";
import ValuesSection from "./components/ValuesSection";
export default function Home() {
  return (
    <div className="bg-white">
      <main>
        <section className="w-full bg-white pt-28">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="relative w-full aspect-video mt-4 overflow-hidden rounded-3xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
              <LandingVideo />
              <div className="absolute inset-0 bg-black/35"></div>
              <div className="absolute inset-0 flex items-center md:items-end  p-10">
                <div className="max-w-xl space-y-1 text-white">
                  
                  <h1 className="text-3xl font-semibold tracking-tight">
                    Modern tours with seamless planning.
                  </h1>
                  <p className="text-sm text-white/75 drop-shadow-sm">
                    Comfortable coaches, expert guides, and clear itineraries
                    for day trips and multi-city escapes.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <button className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-black">
                      View Tour Dates
                    </button>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <TourCards />
        <Reviews />
        <ValuesSection />
      </main>
    </div>
  );
}
