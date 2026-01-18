"use client";

import Image from "next/image";
import { FiAlertCircle } from "react-icons/fi";

const OrderRejected = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white w-[640px] p-16 flex flex-col items-center rounded-xl shadow-md">
        <div className="w-20 h-20 bg-primary-light rounded-full mx-auto p-3 flex justify-center items-center text-primary mb-5">
          <FiAlertCircle size={52}/>

        </div>


        <h2 className="text-2xl font-semibold mb-3">
          Order Rejected!!
        </h2>

        <p className="text-center text-gray-600">
          I'm sorry your order Rejected because your payment proof is not valid
        </p>
      </div>
    </div>
  );
};

export default OrderRejected;
