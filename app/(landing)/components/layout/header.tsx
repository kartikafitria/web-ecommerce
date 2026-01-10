import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <header className="w-full">
      <div className="container mx-auto flex items-center justify-between py-7">

        {/* LOGO */}
        <Image
          src="/images/logo.svg"
          alt="sporton logo"
          width={127}
          height={30}
        />

        {/* NAV */}
        <nav className="flex gap-32 font-medium">
          <Link
            href="#"
            className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:top-8"
          >
            Home
          </Link>
          <Link href="#">Category</Link>
          <Link href="#">Explore Products</Link>
        </nav>

        {/* ACTION */}
        <div className="flex gap-8 items-center">
          <FiSearch size={22} />

          <div className="relative">
            <FiShoppingBag size={22} />
            <span className="absolute -top-1 -right-1 bg-primary w-3.5 h-3.5 rounded-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
