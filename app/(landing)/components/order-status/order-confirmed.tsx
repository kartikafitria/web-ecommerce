"use client";

import Image from "next/image";

const OrderConfirmed = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white w-[640px] p-16 flex flex-col items-center rounded-xl shadow-md">
        <Image
          src="/images/icon-order-confirmed.svg"
          width={117}
          height={117}
          alt="order confirmed"
          className="mb-6"
        />

        <h2 className="text-2xl font-semibold mb-3">
          Order Confirmed!!
        </h2>

        <p className="text-center text-gray-600">
          We have received your payment, and your order is currently processed
          by our staff. Please wait until your favorite sportswear arrives at
          your home. We will contact you via WhatsApp for further shipping
          updates.
        </p>
      </div>
    </div>
  );
};

export default OrderConfirmed;
