"use client";

import {
  FiArrowRight,
  FiChevronUp,
  FiChevronDown,
  FiShoppingBag,
} from "react-icons/fi";
import { useState } from "react";
import Button from "../ui/button";
import { useRouter } from "next/navigation";
import useCartStore from "@/app/hooks/use-cart-store";
import { Product } from "@/app/types";

type TProductActionsProps = {
  product: Product;
  stock: number;
};

const ProductActions = ({ product, stock }: TProductActionsProps) => {
  const { addItem, setCheckoutItems } = useCartStore();
  const router = useRouter();
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    addItem(product, qty);
  };

  const handleCheckoutNow = () => {
    setCheckoutItems([
      {
        ...product,
        qty,
      },
    ]);

    router.push("/checkout");
  };

  return (
    <div className="flex items-center gap-6">
      <div className="flex border border-gray-400 h-[56px]">
        <div className="w-[64px] flex items-center justify-center text-lg font-medium border-r border-gray-400">
          {qty}
        </div>

        <div className="flex flex-col w-[40px]">
          <button
            onClick={() => setQty((prev) => (prev < stock ? prev + 1 : prev))}
            className="flex-1 flex items-center justify-center border-b border-gray-400 hover:bg-gray-100"
          >
            <FiChevronUp />
          </button>

          <button
            onClick={() => setQty((prev) => (prev > 1 ? prev - 1 : prev))}
            className="flex-1 flex items-center justify-center hover:bg-gray-100"
          >
            <FiChevronDown />
          </button>
        </div>
      </div>

      <Button
        className="px-10 h-[56px] flex items-center gap-3"
        onClick={handleAddToCart}
      >
        <FiShoppingBag size={20} />
        Add to Cart
      </Button>

      <Button
        variant="dark"
        className="px-10 h-[56px] flex items-center gap-3"
        onClick={handleCheckoutNow}
      >
        Checkout Now
        <FiArrowRight size={20} />
      </Button>
    </div>
  );
};

export default ProductActions;
