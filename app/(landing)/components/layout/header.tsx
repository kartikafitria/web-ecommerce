"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { useEffect, useState } from "react";

import CartPopup from "../ui/cart-popup";
import useCartStore from "@/app/hooks/use-cart-store";

const Header = () => {
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { items = [] } = useCartStore();

  const totalItems = items.reduce(
    (total, item) => total + item.qty,
    0
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 w-full
        transition-all duration-300
        ${isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-white"}
      `}
    >
      <div className="container mx-auto flex items-center justify-between py-7">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="sporton logo"
            width={127}
            height={30}
          />
        </Link>

        <nav className="flex gap-10 font-medium">
          <Link href="#" className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:top-8">
            Home
          </Link>
          <Link href="#">Category</Link>
          <Link href="#">Explore Products</Link>
        </nav>

        <div className="relative flex gap-10">
          <FiSearch size={24} />

          <button
            className="relative cursor-pointer"
            onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}
          >
            <FiShoppingBag size={24} />

            {totalItems > 0 && (
              <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-white flex items-center justify-center">
                {totalItems}
              </div>
            )}
          </button>

          {isCartPopupOpen && (
            <div className="absolute right-0 top-12 z-50">
              <CartPopup />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
