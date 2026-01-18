"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiCheckCircle } from "react-icons/fi";

import CardWithHeader from "../ui/card-with-header";
import FileUpload from "../ui/file-upload";
import Button from "../ui/button";

import priceFormatter from "@/app/utils/price-formatter";
import useCartStore from "@/app/hooks/use-cart-store";
import { transactionCheckout } from "@/app/services/transactions.service";

const PaymentSteps = () => {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { checkoutItems, customerInfo, reset } = useCartStore();

  useEffect(() => {
    if (!isSubmitting && (!checkoutItems || checkoutItems.length === 0)) {
      router.push("/");
    }
  }, [checkoutItems, router, isSubmitting]);

  if (!checkoutItems && !isSubmitting) return null;

  const totalPrice =
    checkoutItems?.reduce(
      (total, item) => total + item.price * item.qty,
      0
    ) ?? 0;

  const handleConfirmPayment = async () => {
    if (!file) {
      alert("Please upload your payment receipt!");
      return;
    }

    if (
      !customerInfo ||
      !customerInfo.customerName ||
      !customerInfo.customerContact ||
      !customerInfo.customerAddress
    ) {
      alert("Customer information is missing, please return to checkout");
      router.push("/checkout");
      return;
    }

    try {
      setIsSubmitting(true);

      const formData = new FormData();

      formData.append("customerName", customerInfo.customerName);
      formData.append(
        "customerContact",
        customerInfo.customerContact.toString()
      );
      formData.append("customerAddress", customerInfo.customerAddress);
      formData.append("image", file);

      formData.append(
        "purchasedItems",
        JSON.stringify(
          checkoutItems!.map((item) => ({
            productId: item._id,
            qty: item.qty,
          }))
        )
      );

      formData.append("totalPayment", totalPrice.toString());

      const res = await transactionCheckout(formData);

      console.log("CHECKOUT RESPONSE:", res);

      if (!res || !res._id) {
        alert("Failed to create transaction");
        setIsSubmitting(false);
        return;
      }

      alert("Transaction created successfully!");

      reset(); 
      router.push(`/order-status/${res._id}`);
    } catch (error) {
      console.error("Payment confirmation error:", error);
      setIsSubmitting(false);
      alert("Failed to confirm payment. Please try again.");
    }
  };

  return (
    <CardWithHeader title="Payment Steps">
      <div className="px-6 py-6 flex flex-col min-h-[420px]">
        <ol className="list-decimal pl-5 text-sm leading-relaxed flex flex-col gap-4 mb-8">
          <li>
            Transfer the total amount of{" "}
            <span className="font-semibold">
              {priceFormatter(totalPrice)}
            </span>{" "}
            to your preferred bank account listed under{" "}
            <span className="font-semibold">
              'Payment Options'
            </span>{" "}
            (BCA, Mandiri, or BTPN).
          </li>

          <li>
            After completing the transfer,{" "}
            <span className="font-semibold">
              keep the payment receipt
            </span>{" "}
            or a screenshot of the transfer confirmation. This will be needed
            for the next step.
          </li>

          <li>
            Upload the payment receipt/screenshot using the{" "}
            <span className="font-semibold">
              'Upload Receipt & Confirm'
            </span>{" "}
            button below to validate your transaction.
          </li>
        </ol>

        <FileUpload onFileSelect={setFile} />

        <div className="flex-grow" />

        <div className="border-t border-gray-200 pt-5">
          <div className="flex justify-between items-center mb-4">
            <span>Total</span>
            <span className="text-red-500 font-semibold">
              {priceFormatter(totalPrice)}
            </span>
          </div>

          <Button
            variant="dark"
            className="w-full h-12 flex items-center justify-center gap-2"
            onClick={handleConfirmPayment}
            disabled={isSubmitting}
          >
            <FiCheckCircle size={18} />
            {isSubmitting ? "Processing..." : "Upload Receipt & Confirm"}
          </Button>
        </div>
      </div>
    </CardWithHeader>
  );
};

export default PaymentSteps;
