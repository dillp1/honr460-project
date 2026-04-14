import { Map } from "lucide-react";

function Hero() {
  return (
    <section className="relative w-full overflow-hidden px-6 pt-6 md:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-6xl gap-8 rounded-[2rem] bg-[#0f1728] px-6 py-10 text-white md:px-10 md:py-14 lg:grid-cols-[1.35fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl leading-tight font-semibold text-balance md:text-5xl lg:text-6xl">
              Navigate campus spaces with clearer context before you arrive.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/75 md:text-lg">
              Boiler Access Map is a draft accessibility guide that pairs
              building locations with case studies, notes, and wayfinding
              context so you can plan ahead instead of reacting on site.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#map"
              className="inline-flex items-center justify-center rounded-full bg-[#d8b15a] px-5 py-3 text-sm font-semibold text-[#161d2e] transition-transform hover:-translate-y-0.5"
            >
              Explore The Map
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/12"
            >
              Learn About the Project
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center py-4 lg:py-0">
          <Map
            className="size-64 text-[#d8b15a] lg:size-100 md:size-70"
            strokeWidth={1.5}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
