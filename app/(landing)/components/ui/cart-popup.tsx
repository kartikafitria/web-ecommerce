"use client";

import Image from "next/image";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";

import priceFormatter from "@/app/utils/price-formatter";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

import Button from "../ui/button";
import CardWithHeader from "../ui/card-with-header";


const CartItems = () => {
  const router = useRouter();
  const { items, removeItem } = useCartStore();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const handlePayment = () => {
    router.push("/payment");
  };

  return (
    <CardWithHeader title="Your Cart">
      {items.length === 0 && (
        <div className="text-sm text-gray-400 text-center py-8">
          Your cart is empty
        </div>
      )}

      {items.map((item) => (
        <div
          key={item._id}
          className="flex items-center gap-4 border-b border-gray-200 py-4"
        >
          <Image
            src={getImageUrl(item.imageUrl)}
            width={64}
            height={64}
            alt={item.name}
            className="object-contain"
          />

          <div className="flex-1">
            <div className="font-medium text-sm">{item.name}</div>
            <div className="text-xs text-gray-500">
              {item.qty} × {priceFormatter(item.price)}
            </div>
          </div>

          <button
            className="text-gray-400 hover:text-red-500"
            onClick={() => removeItem(item._id)}
          >
            <FiTrash2 />
          </button>
        </div>
      ))}

      {items.length > 0 && (
        <div className="pt-6">
          <div className="flex justify-between font-semibold mb-4">
            <span>Total</span>
            <span className="text-primary">
              {priceFormatter(totalPrice)}
            </span>
          </div>

          <Button
            variant="dark"
            className="w-full flex items-center justify-center gap-2"
            onClick={handlePayment}
          >
            Continue to Payment <FiCreditCard />
          </Button>
        </div>
      )}
    </CardWithHeader>
  );
};

export default CartItems;
