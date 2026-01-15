"use client";

import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import Button from "./button";
import { useRouter } from "next/navigation";

export const cartList = [
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 329000,
    qty: 2,
    imgUrl: "product-1.svg",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 999000,
    qty: 3,
    imgUrl: "product-2.svg",
  },
  {
    name: "SportsOn Slowivin",
    category: "Running",
    price: 119000,
    qty: 5,
    imgUrl: "product-3.svg",
  },
  {
    name: "SportsOn Slowivin",
    category: "Running",
    price: 530000,
    qty: 5,
    imgUrl: "product-4.svg",
  },
];

const CartPopup = () => {
  const router = useRouter();

  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div
      className="
        absolute right-0 top-12
        w-96
        bg-white
        border border-gray-200
        shadow-xl shadow-black/10
        z-50
      "
    >
      <div className="p-4 border-b border-gray-200 font-bold text-center">
        Shopping Cart
      </div>

      {cartList.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-200 p-4 flex justify-between gap-3"
        >
          <div className="flex gap-3">
            <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
              <Image
                src={`/images/products/${item.imgUrl}`}
                width={63}
                height={63}
                alt={item.name}
                className="object-contain"
              />
            </div>

            <div className="self-center">
              <div className="text-sm font-medium">{item.name}</div>
              <div className="flex gap-3 font-medium text-xs">
                <div>{item.qty}x</div>
                <div className="text-primary">
                  {priceFormatter(item.price)}
                </div>
              </div>
            </div>
          </div>

          <button className="w-7 h-7 self-center ml-auto text-gray-400 hover:text-red-500">
            <FiTrash2 size={16} />
          </button>
        </div>
      ))}

      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between font-semibold">
          <div className="text-sm">Total</div>
          <div className="text-primary text-xs">
            {priceFormatter(totalPrice)}
          </div>
        </div>

        <Button
          variant="dark"
          size="small"
          className="w-full mt-4"
          onClick={handleCheckout}
        >
          Checkout Now <FiArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default CartPopup;
