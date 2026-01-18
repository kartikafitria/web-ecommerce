"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CartItems from "../components/checkout/cart-items";
import OrderInformation from "../components/checkout/order-information";
import useCartStore, { CustomerInfo } from "@/app/hooks/use-cart-store";

const Checkout = () => {
  const router = useRouter();
  const {
    items,
    checkoutItems,
    setCustomerInfo,
  } = useCartStore();

  const [formData, setFormData] =
    useState<CustomerInfo>({
      customerName: "",
      customerContact: "",
      customerAddress: "",
    });

  const productsToCheckout =
    checkoutItems !== null ? checkoutItems : items;

  const handlePayment = () => {
    if (
      !formData.customerName ||
      !formData.customerContact ||
      !formData.customerAddress
    ) {
      alert("Please fill in all fields");
      return;
    }

    setCustomerInfo(formData);
    router.push("/payment");
  };

  return (
    <main className="bg-gray-100 min-h-[80vh]">
      <div className="max-w-6xl mx-auto py-20 px-4">
        <h1 className="text-5xl font-bold text-center mb-14">
          Checkout Now
        </h1>

        <div className="grid grid-cols-2 gap-14">
          <OrderInformation
            formData={formData}
            setFormData={setFormData}
          />

          <CartItems
            items={productsToCheckout}
            handlePayment={handlePayment}
          />
        </div>
      </div>
    </main>
  );
};

export default Checkout;
