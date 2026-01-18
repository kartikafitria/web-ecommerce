"use client";

import Image from "next/image";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";

import priceFormatter from "@/app/utils/price-formatter";
import useCartStore from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

import Button from "../ui/button";
import CardWithHeader from "../ui/card-with-header";

const CartItems = () => {
  const router = useRouter();
  const { items = [], removeItem, setCheckoutItems } = useCartStore();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const handlePayment = () => {
    if (items.length === 0) return;

    setCheckoutItems(items); 
    router.push("/checkout");
  };

  return (
    <div className="w-[420px]">
      <CardWithHeader title="Your Cart">
        <div className="px-5 pb-5 flex flex-col max-h-[520px]">

          <div className="overflow-auto pr-1">
            {items.length === 0 && (
              <div className="text-sm text-gray-400 text-center py-10">
                Your cart is empty
              </div>
            )}

            {items.map((item) => (
              <div
                key={item._id}
                className="flex items-center gap-4 border-b border-gray-200 py-4"
              >
                <div className="bg-primary-light w-16 h-16 rounded-md flex items-center justify-center shrink-0">
                  <Image
                    src={getImageUrl(item.imageUrl)}
                    width={48}
                    height={48}
                    alt={item.name}
                    className="object-contain"
                  />
                </div>

                <div className="flex-1">
                  <div className="font-medium text-sm leading-tight">
                    {item.name}
                  </div>

                  <div className="text-xs mt-1 flex gap-1">
                    <span className="text-black font-medium">
                      {item.qty} ×
                    </span>
                    <span className="text-primary font-semibold">
                      {priceFormatter(item.price)}
                    </span>
                  </div>
                </div>

                <button
                  className="text-black hover:text-red-500 transition"
                  onClick={() => removeItem(item._id)}
                  aria-label="Remove item"
                >
                  <FiTrash2 size={16} />
                </button>
              </div>
            ))}
          </div>

          <div className="flex-grow" />

          <div className="pt-6 border-t border-gray-200">
            <div className="flex justify-between font-semibold mb-4 text-sm">
              <span>Total</span>
              <span className="text-primary">
                {priceFormatter(totalPrice)}
              </span>
            </div>

            <Button
              variant="dark"
              className="w-full flex items-center justify-center gap-2"
              onClick={handlePayment}
              disabled={items.length === 0}
            >
              Continue to Payment <FiCreditCard size={16} />
            </Button>
          </div>
        </div>
      </CardWithHeader>
    </div>
  );
};

export default CartItems;
