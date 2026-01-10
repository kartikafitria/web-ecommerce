import { FiFastForward } from "react-icons/fi";
import Image from "next/image";
import Button from "../ui/button";

const HeroSection = () => {
  return (
    <section className="relative container mx-auto min-h-screen flex items-center">
      <div className="grid grid-cols-2 w-full items-center">

        {/* LEFT CONTENT */}
        <div className="relative">
          {/* background basketball */}
          <Image
            src="/images/img-basketball.svg"
            width={380}
            height={380}
            alt="basketball"
            className="absolute -left-24 top-10 opacity-20"
          />

          <div className="relative z-10">
            <span className="text-primary italic block mb-4">
              Friday Sale, 50%
            </span>

            <h1 className="font-extrabold italic leading-[1.05] text-[96px]">
              <span className="block text-black">WEAR YOUR</span>
              <span className="block bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent">
                TOP-QUALITY
              </span>
              <span className="block text-gray-400">SPORTSWEAR</span>
            </h1>

            <p className="mt-10 max-w-xl leading-relaxed text-gray-700">
              Engineered for endurance and designed for speed. Experience gear
              that moves as fast as you do. Premium fabrics. Unmatched comfort.
              Limitless motion.
            </p>

            <div className="flex gap-6 mt-12">
              <Button>
                Explore More <FiFastForward />
              </Button>

              <Button variant="ghost" className="border border-gray-200">
                Watch Video
                <Image
                  src="/images/icon-play-video.svg"
                  alt="play"
                  width={28}
                  height={28}
                />
              </Button>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex justify-end">
          <Image
            src="/images/img-hero.svg"
            width={650}
            height={850}
            alt="hero"
            className="relative z-10"
          />
        </div>
      </div>

      {/* ornament */}
      <Image
        src="/images/img-ornament-hero.svg"
        width={140}
        height={280}
        alt="ornament"
        className="absolute right-[-60px] top-1/2 -translate-y-1/2"
      />
    </section>
  );
};

export default HeroSection;
