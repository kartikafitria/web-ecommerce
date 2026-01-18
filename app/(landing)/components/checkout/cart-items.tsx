"use client";

import Image from "next/image";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";

import priceFormatter from "@/app/utils/price-formatter";
import useCartStore from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

import Button from "../ui/button";
import CardWithHeader from "../ui/card-with-header";
import { CartItem } from "@/app/hooks/use-cart-store";

type Props = {
  items: CartItem[];
  handlePayment: () => void;
};

const CartItems = ({ items, handlePayment }: Props) => {
  const {
    removeItem,
    checkoutItems,
    setCheckoutItems,
  } = useCartStore();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const handleRemove = (id: string) => {
    if (checkoutItems !== null) {
      const updated = checkoutItems.filter(
        (item) => item._id !== id
      );

      setCheckoutItems(updated);
    } else {
      removeItem(id);
    }
  };

  return (
    <CardWithHeader title="Cart Items">
      <div className="flex flex-col min-h-[420px]">

        <div className="overflow-auto max-h-[300px]">
          {items.length === 0 && (
            <div className="py-8 text-center text-sm text-gray-400">
              Your cart is empty
            </div>
          )}

          {items.map((item) => (
            <div
              key={item._id}
              className="border-b border-gray-200 p-4 flex gap-3"
            >
              <div className="bg-primary-light aspect-square w-16 flex justify-center items-center rounded">
                <Image
                  src={getImageUrl(item.imageUrl)}
                  width={63}
                  height={63}
                  alt={item.name}
                  className="aspect-square object-contain"
                />
              </div>

              <div className="self-center">
                <div className="text-sm font-medium">
                  {item.name}
                </div>
                <div className="flex gap-3 font-medium text-xs">
                  <div>{item.qty}x</div>
                  <div className="text-primary">
                    {priceFormatter(item.price)}
                  </div>
                </div>
              </div>

              <button
                className="w-7 h-7 self-center ml-auto text-gray-400 hover:text-red-500"
                onClick={() => handleRemove(item._id)}
              >
                <FiTrash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="flex-grow" />

        <div className="border-t border-gray-200 px-4 pt-5 pb-6">
          {items.length > 0 && (
            <div className="flex justify-between font-semibold mb-6">
              <div className="text-sm">Total</div>
              <div className="text-primary text-xs">
                {priceFormatter(totalPrice)}
              </div>
            </div>
          )}

          <Button
            variant="dark"
            className="w-full h-12 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handlePayment}
            disabled={items.length === 0}
          >
            <FiCreditCard size={16} />
            Proceed to Payment
          </Button>
        </div>
      </div>
    </CardWithHeader>
  );
};

export default CartItems;
