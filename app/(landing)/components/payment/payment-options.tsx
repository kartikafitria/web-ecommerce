import { FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";

const paymentList = [
  {
    bank_name: "BCA",
    account_number: "0123182312",
    account_holder: "PT SportsOn Digital",
  },
  {
    bank_name: "Mandiri",
    account_number: "83923912013203123",
    account_holder: "PT SportsOn Digital",
  },
  {
    bank_name: "BTPN",
    account_number: "5238218923",
    account_holder: "PT SportsOn Digital",
  },
];

const PaymentOptions = () => {
  return (
    <CardWithHeader title="Payment Options">
      <div className="min-h-[330px]">
        {paymentList.map((payment, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-5 border-b border-gray-200 last:border-b-0"
          >
            <div className="flex items-center gap-5">
              <div className="bg-blue-100 p-4 rounded-md text-blue-600">
                <FiCreditCard size={22} />
              </div>

              <div>
                <div className="font-bold text-base">
                  {payment.bank_name}
                </div>

                <div className="text-sm text-black mt-1">
                  {payment.account_number}
                </div>

                <div className="text-xs text-black mt-1">
                  {payment.account_holder}
                </div>
              </div>
            </div>

            <div className="bg-blue-100 text-gray-700 text-sm px-4 py-2 rounded-md font-medium">
              Bank Transfer
            </div>
          </div>
        ))}
      </div>
    </CardWithHeader>
  );
};

export default PaymentOptions;
