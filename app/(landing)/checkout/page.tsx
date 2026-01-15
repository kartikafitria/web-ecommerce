import CartItems from "../components/checkout/cart-items";
import OrderInformation from "../components/checkout/order-information";

const Checkout = () => {
  return (
    <main className="bg-gray-100 min-h-[80vh]">
      <div className="max-w-6xl mx-auto py-20 px-4">
        <h1 className="text-5xl font-bold text-center mb-14">
          Checkout Now
        </h1>

        <div className="grid grid-cols-[1fr_1.5fr] gap-14 items-start">
          <OrderInformation />

          <CartItems />
        </div>
      </div>
    </main>
  );
};

export default Checkout;
