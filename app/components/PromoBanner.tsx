"use client";


export default function PromoBanner() {
  return (
    <div className="fixed top-0 z-50 w-full bg-gradient-to-r from-[#0a0a0a] via-[#1a0f2e] to-[#0a0a0a] text-white">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-center gap-3 text-sm relative">
        <span className="flex items-center gap-2 text-gray-200">
          <span>
            USE PROMO CODE "ZOOM2026" AT CHECKOUT AND SAVE ADDITIONAL 10%!
          </span>
        </span>

        {/* close button */}
       
      </div>
    </div>
  );
}
