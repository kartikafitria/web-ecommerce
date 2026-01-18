import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderRejected from "../../components/order-status/order-rejected";
import OrderSubmitted from "../../components/order-status/order-submitted";
import { getTransactionById } from "@/app/services/transactions.service";

type TPageProps = {
  params: Promise<{
    id: string;
  }>;
};

function isValidObjectId(id: string) {
  return /^[a-fA-F0-9]{24}$/.test(id);
}

const OrderStatus = async ({ params }: TPageProps) => {
  const { id } = await params;

  if (!isValidObjectId(id)) {
    console.error("INVALID TRANSACTION ID:", id);
    return (
      <main className="bg-gray-100 min-h-[80vh]">
        <div className="max-w-5xl mx-auto py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Invalid Order ID</h1>
          <p className="text-gray-600">
            Transaction ID is not valid.
          </p>
        </div>
      </main>
    );
  }

  const transaction = await getTransactionById(id);

  return (
    <main className="bg-gray-100 min-h-[80vh]">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-11">
          Order Status
        </h1>

        {!transaction && <OrderSubmitted />}
        {transaction?.status === "pending" && <OrderSubmitted />}
        {transaction?.status === "paid" && <OrderConfirmed />}
        {transaction?.status === "rejected" && <OrderRejected />}
      </div>
    </main>
  );
};

export default OrderStatus;
