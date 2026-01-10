import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark-alternate text-white mt-52">
      
      {/* TOP */}
      <div className="container mx-auto flex justify-between pt-16 pb-24">
        
        {/* LEFT */}
        <div className="w-[360px]">
          <Image
            src="/images/logo-footer.svg"
            alt="logo sporton footer"
            width={187}
            height={44}
          />

          <p className="mt-6 text-gray-300 leading-relaxed">
            Engineered for endurance and designed for speed.
            <br />
            Experience gear that moves as fast as you do.
          </p>
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 gap-32 text-gray-300">
          
          {/* MENU */}
          <div className="flex flex-col gap-4">
            <Link href="#">Home</Link>
            <Link href="#">Categories</Link>
            <Link href="#">Explore Products</Link>
            <Link href="#">About Us</Link>
          </div>

          {/* SOCIAL */}
          <div className="flex flex-col gap-4">
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">TikTok</Link>
            <Link href="#">YouTube</Link>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10">
        <div className="container mx-auto grid grid-cols-2 py-5 text-sm text-gray-400 items-center">

          {/* LEFT */}
          <span>SportsOn © 2025 All Rights Reserved.</span>

          {/* RIGHT */}
          <div className="justify-self-end">
            <div className="grid grid-cols-2 gap-32">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms Conditions</Link>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
