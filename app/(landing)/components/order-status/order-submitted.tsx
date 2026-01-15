"use client";

import Image from "next/image";
import Button from "../ui/button";
import { FiRefreshCw } from "react-icons/fi";

const OrderSubmitted = () => {
  const reloadOrderStatus = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white w-[640px] p-16 flex flex-col items-center rounded-xl shadow-md">
        <Image
          src="/images/icon-order-submitted.svg"
          width={117}
          height={117}
          alt="order submitted"
          className="mb-6"
        />

        <h2 className="text-2xl font-semibold mb-3">
          Order Submitted!!
        </h2>

        <p className="text-center text-gray-600 mb-8">
          Your order is recorded in our system. We are still confirming the
          payment status. Please wait, your order status will be updated in
          less than 12 hours.
        </p>

        <Button
          variant="dark"
          className="w-full flex items-center justify-center gap-2"
          onClick={reloadOrderStatus}
        >
          <FiRefreshCw />
          Refresh Order Status
        </Button>
      </div>
    </div>
  );
};

export default OrderSubmitted;
