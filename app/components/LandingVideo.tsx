"use client";

export default function LandingVideo() {
  return (
    <div className="relative w-full aspect-video">
      <iframe
        src="https://www.youtube.com/embed/nsKwNqjKfWo?autoplay=1&mute=1&controls=0&loop=1&playlist=nsKwNqjKfWo&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&disablekb=1&fs=0&cc_load_policy=0"
        allow="autoplay; fullscreen"
        className="w-full h-full pointer-events-none border-0"
        title="Background Video"
      />
   
    </div>
  );
}