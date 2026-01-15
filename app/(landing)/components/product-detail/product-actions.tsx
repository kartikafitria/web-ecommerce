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

const ProductActions = () => {
  const router = useRouter();
  const { push } = router;

  const [qty, setQty] = useState(1);

  const checkout = () => {
  };

  return (
    <div className="flex items-center gap-6">
      <div className="flex border border-gray-400 h-[56px]">
        <div className="w-[64px] flex items-center justify-center text-lg font-medium border-r border-gray-400">
          {qty}
        </div>

        <div className="flex flex-col w-[40px]">
          <button
            aria-label="Increase quantity"
            onClick={() => setQty((prev) => prev + 1)}
            className="flex-1 flex items-center justify-center border-b border-gray-400 hover:bg-gray-100"
          >
            <FiChevronUp />
          </button>

          <button
            aria-label="Decrease quantity"
            onClick={() =>
              setQty((prev) => (prev > 1 ? prev - 1 : prev))
            }
            className="flex-1 flex items-center justify-center hover:bg-gray-100"
          >
            <FiChevronDown />
          </button>
        </div>
      </div>

      <Button className="px-10 h-[56px] flex items-center gap-3">
        <FiShoppingBag size={20} />
        Add to Cart
      </Button>

      <Button
        variant="dark"
        className="px-10 h-[56px] flex items-center gap-3"
        onClick={() => push("/checkout")}
      >
        Checkout Now
        <FiArrowRight size={20} />
      </Button>
    </div>
  );
};

export default ProductActions;
