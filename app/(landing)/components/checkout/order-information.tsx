"use client";

import React from "react";
import CardWithHeader from "../ui/card-with-header";
import { CustomerInfo } from "@/app/hooks/use-cart-store";

type TOrderInformation = {
  formData: CustomerInfo;
  setFormData: React.Dispatch<React.SetStateAction<CustomerInfo>>;
};

const OrderInformation = ({
  formData,
  setFormData,
}: TOrderInformation) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <CardWithHeader title="Order Information">
      <div className="p-5 h-full flex flex-col gap-4">
        <div className="input-group">
          <label htmlFor="customerName">Full Name</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            placeholder="Type your full name"
            value={formData.customerName}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="customerContact">
            Whatsapp Number
          </label>
          <input
            type="text"
            id="customerContact"
            name="customerContact"
            placeholder="Type your whatsapp number"
            value={formData.customerContact}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group flex-1 flex flex-col">
          <label htmlFor="customerAddress">
            Shipping Address
          </label>

          <textarea
            id="customerAddress"
            name="customerAddress"
            className="flex-1 min-h-[160px] py-3"
            placeholder="Type your shipping address"
            value={formData.customerAddress}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </CardWithHeader>
  );
};

export default OrderInformation;
