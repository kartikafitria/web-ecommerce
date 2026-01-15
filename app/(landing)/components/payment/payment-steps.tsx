"use client";

import CardWithHeader from "../ui/card-with-header";
import FileUpload from "../ui/file-upload";
import Button from "../ui/button";
import priceFormatter from "@/app/utils/price-formatter";
import { FiCheckCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";

const PaymentSteps = () => {
  const router = useRouter();
  const { push } = router;

  const uploadAndConfirm = () => {
    push("/order-status/123123123");
  };

  return (
    <CardWithHeader title="Payment Steps">
      <div className="px-6 py-6 flex flex-col min-h-[540px]">
        <ol className="list-decimal pl-5 text-sm leading-relaxed flex flex-col gap-4 mb-8">
          <li>
            Transfer the total amount of{" "}
            <span className="font-semibold">Rp 1.035.000</span> to your preferred
            bank account listed under{" "}
            <span className="font-semibold">"Payment Options"</span> (BCA,
            Mandiri, or BTPN).
          </li>

          <li>
            After completing the transfer,{" "}
            <span className="font-semibold">keep the payment receipt</span> or a
            screenshot of the transfer confirmation. This will be needed for the
            next step.
          </li>

          <li>
            Upload the payment receipt/screenshot using the{" "}
            <span className="font-semibold">
              "Upload Receipt & Confirm"
            </span>{" "}
            button below to validate your transaction.
          </li>
        </ol>

        <FileUpload />

        <div className="flex-grow" />

        <div className="border-t border-gray-200 pt-5">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-700">
              Total
            </span>
            <span className="text-sm font-semibold text-red-500">
              {priceFormatter(1035000)}
            </span>
          </div>

          <Button
            variant="dark"
            className="w-full h-12 text-sm font-semibold flex items-center justify-center gap-2"
            onClick={uploadAndConfirm}
          >
            <FiCheckCircle size={18} />
            Upload Receipt & Confirm
          </Button>
        </div>
      </div>
    </CardWithHeader>
  );
};

export default PaymentSteps;
