"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-2">
              <Image
                src="/zoomtours_logo.webp"
                alt="Zoom Tours"
                width={100}
                height={50}
              />
            </a>
            <p className="text-xs text-gray-600">
              For many years, Zoom Tours has delivered curated travel
              experiences with trusted guides, reliable logistics, and careful
              planning across Canada and the U.S.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Contact
            </h3>
            <div className="space-y-2 text-xs text-gray-600">
              <p className="flex items-center gap-2">
                <FaLocationDot className="text-gray-400" />
                55 York St Suite # 105, Toronto, ON M5J 1R7
              </p>
              <p className="flex items-center gap-2">
                <FaLocationDot className="text-gray-400" />
                423 3rd Street, Niagara Falls, Buffalo, NY USA 14301
              </p>
              <p className="text-gray-900 font-semibold">
                Phone:{" "}
                <a
                  href="tel:+14162769127"
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  +1.416.276.9127
                </a>
              </p>
              <p className="text-gray-900 font-semibold">
                Email:{" "}
                <a
                  href="mailto:info@zoomtours.com"
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  info@zoomtours.com
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className='w-full flex items-center justify-center'>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Follow Us
              </h3>
            </div>
            <div className=" flex items-center justify-center flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaFacebookF className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaInstagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaTwitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaTiktok className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaYoutube className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaLinkedinIn className="h-4 w-4" />
                </a>
              </div>

              <Image
                src="/safe_travels_partner.webp"
                alt="Safe Travels Partner"
                width={90}
                height={60}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-gray-200 pt-6 text-xs text-gray-500">
          <span>© 2026 Zoom Tours Inc. All rights reserved</span>
          <div className="flex items-center gap-3">
            <span>We Accept</span>
            <div className="flex items-center gap-2">
              {[
                {
                  src: "https://cdn.worldvectorlogo.com/logos/visa-5.svg",
                  alt: "Visa",
                },
                {
                  src: "https://cdn.worldvectorlogo.com/logos/mastercard-3.svg",
                  alt: "Mastercard",
                },
                {
                  src: "https://cdn.worldvectorlogo.com/logos/american-express-1.svg",
                  alt: "American Express",
                },
                {
                  src: "https://cdn.worldvectorlogo.com/logos/discover-1.svg",
                  alt: "Discover",
                },
                {
                  src: "https://cdn.worldvectorlogo.com/logos/paypal-3.svg",
                  alt: "PayPal",
                },
              ].map((card) => (
                <div
                  key={card.alt}
                  className="relative h-7 w-11 overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm"
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    sizes="44px"
                    className="object-cover p-1"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
