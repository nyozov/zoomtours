"use client";
import { HiStar } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";

const reviews = [
  {
    name: "Deshawn Wyatte",
    date: "6 March 2026",
    rating: 5,
    text: "Alp is an amazing guide. He was very kind and communicative on this journey. He made sure everyone was comfortable and he accommodated to all our needs. Book Zoom Tours. You'll love it.",
    avatar: "D",
    color: "bg-blue-500",
  },
  {
    name: "Tobias Kampmann",
    date: "5 March 2026",
    rating: 5,
    text: "Garry was a great guide: punctual, knowledgeable and helpful!",
    avatar: "T",
    color: "bg-purple-500",
  },
  {
    name: "Diana Orjuela",
    date: "22 February 2026",
    rating: 5,
    text: "Amazing",
    avatar: "D",
    color: "bg-pink-500",
  },
  {
    name: "Burhan Ahmad",
    date: "22 February 2026",
    rating: 5,
    text: "Excellent experience, absolutely mesmerising, the tour guide was lovely respectful, all in all a very comfortable experience. The van itself was very comfortable and spacious as well, whilst the tour guide was giving valuable information as we saw stunning sceneries out the tinted windows. Would love to come again.",
    avatar: "B",
    color: "bg-rose-500",
  },
  {
    name: "Jude Byrne",
    date: "16 February 2026",
    rating: 5,
    text: "Great driver and very enjoyable trip",
    avatar: "J",
    color: "bg-indigo-500",
  },
  {
    name: "gissell",
    date: "16 February 2026",
    rating: 5,
    text: "We had an amazing experience with Anil as our Niagara Falls tour guide! From the moment he picked us up in Toronto, the ride was smooth, comfortable, and full of great energy. Anil shared so many interesting facts, local stories, and fun insights about Niagara Falls and the surrounding areas that really made the trip special. He was incredibly knowledgeable, friendly, and engaging, and he made sure everyone felt relaxed and excited throughout the day. You can tell he genuinely loves what he does, and that passion makes a huge difference. Highly recommend Anil if you want a fun, informative, and memorable Niagara Falls tour!",
    avatar: "G",
    color: "bg-teal-500",
  },
  {
    name: "Cooper Hyman",
    date: "16 February 2026",
    rating: 5,
    text: "amazing goat!!",
    avatar: "C",
    color: "bg-orange-500",
  },
  {
    name: "lillers",
    date: "16 February 2026",
    rating: 5,
    text: "very nice guy",
    avatar: "L",
    color: "bg-cyan-500",
  },
  {
    name: "Karena Crerar",
    date: "15 February 2026",
    rating: 5,
    text: "Amazing tour with expert guide Garry. So kind, gave us loads of free time and helped us get a sense of our bearings! Highly recommend this tour!",
    avatar: "K",
    color: "bg-violet-500",
  },
  {
    name: "Lisa Hernandez",
    date: "12 February 2026",
    rating: 5,
    text: "Superbe découverte des chutes du Niagara et de ses alentours grâce à notre super guide, Alp. Well recommended, thank you so much for the trip !",
    avatar: "L",
    color: "bg-fuchsia-500",
  },
];

export default function Reviews() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between pb-6">
          <h3 className="text-xl font-semibold text-gray-900">Reviews</h3>
          <span className="text-xs text-gray-500">
            4.6 (2,134 reviews)
          </span>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="break-inside-avoid">
              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-9 w-9 ${review.color} rounded-full flex items-center justify-center text-white text-sm font-semibold`}
                    >
                      {review.avatar}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-900">
                        {review.name}
                      </div>
                      <div className="text-xs text-gray-500">{review.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-xs text-gray-900">
                    <HiStar className="h-3.5 w-3.5 text-yellow-400" />
                    <span>{review.rating}.0</span>
                  </div>
                </div>

                <p className="mt-3 text-xs text-gray-600">
                  “{review.text}”
                </p>

                <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <HiStar
                        key={i}
                        className="h-3.5 w-3.5 text-yellow-400"
                      />
                    ))}
                  </div>
                  <FcGoogle className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
